/* 
Name:         Roger Silva Santos Aguiar 
Function:     This file sets up the connection with the database 
Initial date: May 5, 2020
Last update:  May 8, 2020 
*/

//Required modules

//It requires postgree module
const pgp = require('pg-promise')(/* options */)

//It creates the connection with PostgreeSql 
const connection = pgp('postgres://postgres:983453069@localhost:5434/COMPANY')

//It makes the module available to other files
module.exports = connection;