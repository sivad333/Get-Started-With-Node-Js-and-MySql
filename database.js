const mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
	host : process.env.HOST,
	database : process.env.DATABASE,
	user : process.env.USER,
	password : ''
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;