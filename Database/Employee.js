/* 
Name:         Roger Silva Santos Aguiar
Function:     It creates a module to access the EMPLOYEE table
Initial date: April 19, 2020
Last update:  May 14, 2020 
*/

//Required modules
//var mysql = require('mysql');
const connection = require('../Database/DatabaseConfig');

module.exports = 
{
    show(res)
    {
        connection.query('SELECT * FROM EMPLOYEE ORDER BY fname')
        .then(function (data) 
        {
            res.send(data)
        })//End then
        .catch(function (error) 
        {
            console.log('ERROR:', error)
        })//End catch

    },//End show method   

    insert(res, fname, minit, lname, ssn, bdate, address, sex, salary, super_ssn, dno)
    {  
        //It inserts the data into the table
        connection.query('INSERT INTO EMPLOYEE(fname, minit, lname, ssn, bdate, address, sex, salary, super_ssn, dno) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [fname, minit, lname, ssn, bdate, address, sex, salary, super_ssn, dno])
        .then(function (data) 
        {
            res.redirect('/');//It redirects to the homepage.            
        })//End then
        .catch(function (error) 
        {
            console.log('ERROR:', error)
        })//End catch       
    },//End insert method

    delete_row(res, ssn)
    {  
        //It inserts the data into the table
        connection.query('DELETE FROM EMPLOYEE WHERE ssn = $1', ssn)
        .then(function (data) 
        {
            res.send('Operation has been completed!');            
        })//End then
        .catch(function (error) 
        {
            console.log('ERROR:', error)
        })//End catch       
    }//End delete method
}//End module