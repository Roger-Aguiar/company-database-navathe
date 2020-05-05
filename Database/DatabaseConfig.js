/* 
Name:         Roger Silva Santos Aguiar 
Function:     This file sets up the connection with the database 
Initial date: May 5, 2020
Last update:  May 5, 2020 
*/

//Required modules
var mysql = require('mysql');

connection = mysql.createConnection
(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        schema: 'COMPANY'
    }
)//End connection

module.exports = connection;