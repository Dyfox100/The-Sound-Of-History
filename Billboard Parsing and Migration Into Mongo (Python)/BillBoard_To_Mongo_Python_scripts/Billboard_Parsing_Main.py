import Billboard_Parsing_Class_Implementation
from Billboard_Parsing_Class_Implementation import BillBoardParser

def main():

    billboard_parse = BillBoardParser()

    billboard_parse.get_weekly_top_100()

    billboard_parse.get_All_Time_200()

    return 1

if __name__ == '__main__':
    main()
