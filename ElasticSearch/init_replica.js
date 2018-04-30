#init_replica.js


config = { _id: "bbtop100", members:[
			{_id : 0, host : "localhost:27017"},
			{_id : 1, host : "localhost:27018"},
			{_id : 2, host : "localhost:27019"}]
};

config = { _id: "bbtop100", members:[
			{_id : 0, host : "localhost:27017"},
			{_id : 1, host : "localhost:27018"}]
};


rs.initiate(config);
rs.status();