/* 
Name:         Roger Silva Santos Aguiar
Function:     It creates a module to access the EMPLOYEE table
Initial date: April 19, 2020
Last update:  May 8, 2020 
*/

//Required modules
//var mysql = require('mysql');
const connection = require('../Database/DatabaseConfig');

module.exports = 
{
    show(res)
    {
        connection.many('SELECT * FROM EMPLOYEE')
        .then(function (data) 
        {
            res.send(data)
        })//End then
        .catch(function (error) 
        {
            console.log('ERROR:', error)
        })//End catch

    }//End method    
}//End module