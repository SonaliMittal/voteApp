module.exports = {
	LOCAL: process.env.LOCAL,
	APP_NAME : "Voting App",
	PORT : "3200",
	MONGO : {
		"hostname":"localhost",
		"port":"27017",
		"username":"",
		"password":"",
		"dbName": "vote_db",
		"replicaSet":null
	}
}