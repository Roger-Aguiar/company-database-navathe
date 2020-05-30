/* 
Name:         Roger Silva Santos Aguiar
Function:     It creates a module to access the EMPLOYEE table
Initial date: April 19, 2020
Last update:  May 30, 2020 
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
    
    //This method selects an employee by ssn
    selectEmployee(res, ssn)
    {
        connection.query('SELECT * FROM EMPLOYEE WHERE ssn = $1', ssn)
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

    update(res, fname, minit, lname, ssn, bdate, address, sex, salary, super_ssn, dno)
    {  
        //It inserts the data into the table
        connection.query('UPDATE EMPLOYEE SET fname = $1, minit = $2, lname = $3, bdate = $4, address = $5, sex = $6, salary = $7, super_ssn = $8, dno = $9 WHERE ssn = $10',
        [fname, minit, lname, bdate, address, sex, salary, super_ssn, dno, ssn])
        .then(function (data) 
        {
            res.send('<h2>Operation has been completed!</h2>');//It redirects to the homepage.          
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