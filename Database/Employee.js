/* 
Name:         Roger Silva Santos Aguiar
Function:     It creates a module to access the EMPLOYEE table
Initial date: April 19, 2020
Last update:  May 13, 2020 
*/

//Required modules
//var mysql = require('mysql');
const connection = require('../Database/DatabaseConfig');

module.exports = 
{
    show(res)
    {
        connection.query('SELECT * FROM EMPLOYEE')
        .then(function (data) 
        {
            res.send(data)
        })//End then
        .catch(function (error) 
        {
            console.log('ERROR:', error)
        })//End catch

    },//End method    
    insert(res)
    {  
        var fname = 'Roger';
        var minit = 'S';
        var lname = 'Aguiar';
        var ssn = '123456782';
        var bdate = '1986-04-25';
        var address = '222, Piauí street, Bicas, MG';
        var sex = 'M';
        var salary = '21000';
        var super_ssn = '321456987';
        var dno = 5;

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
        
    }
}//End module