import datetime
from datetime import datetime as dt
from datetime import timedelta as td


import billboard as bb
import pymongo as pm
from pymongo import MongoClient

class BillBoardParser:
    """Class to parse billboard chart data into a mongo store

    INIT Method:

    Parameter host = mongo URI See: https://docs.mongodb.com/manual/reference/connection-string/. Default: 'localhost'. Ensure Server is running if not local host.
    Parameter top_100_num_years_to_get: Number of years to retrieve from top 100 weekly chart. Default: 65
    Parameter top_100_num_songs_to_get: Number of songs to retrieve for each week from the top 100 chart. Default: 15.
    Parameter top_200_num_songs_to_get: Number of the top 200 all time songs to retrieve. Default: 200.

    Return Value: Constructed Object.
    """

    def __init__(self, host='localhost', top_100_num_years_to_get=10, top_100_weekly_num_songs_to_get=50, top_200_num_songs_to_get=200):

        self._host = host

        self._top_100_num_years = top_100_num_years_to_get
        self._top_100_num_songs = top_100_weekly_num_songs_to_get
        self._top_200_num_songs = top_200_num_songs_to_get

        self._client = MongoClient(self._host)
        self._validate_host_client()

        self._current_db = None
        self._current_collection = None

    def _validate_host_client(self):
        """Attempts to connect to client and prints error message if failed"""

        try:
            self._client.admin.command('ismaster')

        except ConnectionFailure:
            print("Server not available")

        return None

    def _set_up_Mongo_For_Top_200(self):
        """Connects to the correct database to store the top 200 All Time Chart"""

        self._current_db = self._client.top_200_all_time
        self._current_collection = self._current_db.songs

        return None

    def _set_up_Mongo_For_Top_100(self):
        """Connects to the correct database to store the top 100 Weekly Charts"""

        self._current_db = self._client.top_100_weekly
        self._current_collection = self._current_db.songs

        return None


    def get_All_Time_200(self):
        """Adds top 200 All Time chart to mongo store.

        RETURN VALUE:
            None, but updates Mongo Store

        Errors:
            Prints error message and returns None if self._top_200_num_songs_to_get <= 0.
            Prints warning and returns full chart if self._top_200_num_songs_to_get >= 200"""


        #Error Messages
        if self._top_200_num_songs <= 0:
            print("Error: Cannot Get 0 or Less Songs")
            return -1
        if self._top_200_num_songs > 200:
            print("Warning: Cannont get more than 200 Songs. Full Chart Returned")

        self._set_up_Mongo_For_Top_200()

        chart = bb.ChartData('greatest-billboard-200-albums')

        #appends info about one song to a dictionary, then converts to data frame, then appends to original dataframe.
        for ii in range(self._top_200_num_songs):

                dictToAppend = {}

                dictToAppend['title'] = chart[ii].title

                dictToAppend['artist'] = chart[ii].artist

                dictToAppend['rank'] = chart[ii].rank

                self._current_collection.update_one({'rank': chart[ii].rank}, {'$set': dictToAppend}, upsert=True)

        return None

    def get_weekly_top_100(self):
        """Pulls the billboard hot 100 chart for the number of years back from today (current week).
        Adds the self._top_100_num_songs top songs to to a MongoDB Document.
        Song_n in the MongoDB store = the nth most popular song for the week.
        Updates the store, will not store multiple entries of the same document.
        RETURN VALUE:
            None, updates mongo store.
        ERRORS:
            if self._top_100_num_songs <= 0 or > 100 Prints Error Message and returns None.
            If self._top_100_num_years <= 0 Prints Error Message and returns None.
            If self._top_100_num_years exceeds total history of billboard charts, prints warning and returns dataframe up to end of charts.
        NOTES:
            Takes a while; be patient!"""

        #Error Messages
        if self._top_100_num_songs <= 0 or self._top_100_num_songs >= 100:
            print("Error: Num Songs cannont less than or equal to 0 or greater than 100.")
            return -1
        if self._top_100_num_years <= 0:
            print("Error: Num Years cannont be less than or equal to 0.")
            return -1

        self._set_up_Mongo_For_Top_100()

        #Gets most recent chart
        chart = bb.ChartData('hot-100')

        numWeeksGotten = 0
        numWeeks = self._top_100_num_years * 52

        #while there is another chart to get and number of weeks doesn't exceed that passed in.
        while (chart.date and numWeeksGotten < numWeeks):

            #catches error where billbard interface doesn't return a chart, just gets chart for -1 day from date.
            try:
                testVar = chart[0].title
            except:
                dateTimeStart = dt.strptime(endDate, "%Y-%m-%d")
                dateTimeStartMinusOne = dateTimeStart + td(days=(-1))
                strBeginDate = dateTimeStartMinusOne.strftime("%Y-%m-%d")
                chart = bb.ChartData('hot-100', strBeginDate)

            #converts adds one to chart previous date through python's datetime module
            #to get correct begining date for chart
            endDate = chart.date
            previousDate = chart.previousDate
            dateTimePrevious = dt.strptime(previousDate, "%Y-%m-%d")
            dateTimePreviousPlusOne = dateTimePrevious + td(days=1)
            strBeginDate = dateTimePreviousPlusOne.strftime("%Y-%m-%d")

            #appends info to a temporary dictionary that later is converted to a dataframe
            dictToAppend = {}
            dictToAppend['endDate'] = endDate
            dictToAppend['beginDate'] = strBeginDate

            #iterates through the correct numSongs as passed above and adds to dataframe.
            for ii in range(0, self._top_100_num_songs):

                strII = str(ii+1)

                strTitle = 'title_'+strII

                strArtist = 'artist_' + strII
                dictToAppend[strArtist] = chart[ii].artist

                strPeakPos = 'peakPosition_' + strII
                dictToAppend[strPeakPos] = chart[ii].peakPos

                strLastPos = 'positionLastWeek_' + strII
                dictToAppend[strLastPos] = chart[ii].lastPos

                strWeeksOnChart = 'weeksOnChart_' + strII
                dictToAppend[strWeeksOnChart] = chart[ii].weeks


            self._current_collection.update_one({'endDate':endDate}, {'$set': dictToAppend}, upsert=True)
            numWeeksGotten += 1
            print(numWeeksGotten)
            #gets previous chart
            chart = bb.ChartData('hot-100', chart.previousDate)


        if numWeeksGotten < numWeeks:
            print("Warning: Number of Years exceeds total history of top-100 chart.")

        return None
