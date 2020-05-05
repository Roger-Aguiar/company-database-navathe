/* 
Name:         Roger Silva Santos Aguiar
Function:     It creates a module to access the EMPLOYEE table
Initial date: April 19, 2020
Last update:  April 29, 2020 
*/

//Required modules
//var mysql = require('mysql');
const connection = require('../Database/DatabaseConfig');

module.exports = 
{
    show(res)
    {
        //It opens the connection
        connection.connect()

        connection.query
        (
            'SELECT * FROM EMPLOYEE', 
            function (err, rows, fields) 
            {
                if (err) 
                {
                    throw err
                }   
                //It displays the array in the browser     
                res.send(rows);          
            }
        )//End connection query

        //It closes the connection
        connection.end();
    }//End show method
}//End module