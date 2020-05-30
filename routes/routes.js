/* 
Name:         Roger Silva Santos Aguiar
Function:     This file contains the routes for all the system.
Initial date: May 5, 2020
Last update:  May 16, 2020 
*/

var express = require('express');
var router = express.Router();
const myModules = require('../Database/Employee');

//Home route
router.get
(
    '/', 
    function (req, res)
    {
        res.send('<h1>Homepage</h1>')
    } 
)

/*========================================EMPLOYEE routes======================================== */

//This route shows all the rows of the EMPLOYEE table
router.get
(
    '/show_employees', 
    function (req, res)
    {
        myModules.show(res);//It shows all the rows or the EMPLOYEE table        
    } 
);//End employee route

router.get
(
    '/add/:fname/:minit/:lname/:ssn/:bdate/:address/:sex/:salary/:super_ssn/:dno', 
    function (req, res)
    {
        //Variables
        //It gets the params
        var fname = req.params.fname;
        var minit = req.params.minit;
        var lname = req.params.lname;
        var ssn = req.params.ssn;
        var bdate = req.params.bdate;
        var address = req.params.address;
        var sex = req.params.sex;
        var salary = req.params.salary;
        var super_ssn = req.params.super_ssn;
        var dno = req.params.dno;

        //It inserts a new row to the EMPLOYEE table using the following module
        myModules.insert(res, fname, minit, lname, ssn, bdate, address, sex, salary, super_ssn, dno);                
    } 
);//End add route

router.get
(
    '/select_employee/:ssn', 
    function (req, res)
    {
        //Variables
        //It gets the params       
        var ssn = req.params.ssn;        

        //It selects an employee by ssn from EMPLOYEE table using the following module, 
        myModules.selectEmployee(res, ssn);                
    } 
);//End select_employee route

router.get
(
    '/update/:fname/:minit/:lname/:ssn/:bdate/:address/:sex/:salary/:super_ssn/:dno', 
    function (req, res)
    {
        //Variables
        //It gets the params
        var fname = req.params.fname;
        var minit = req.params.minit;
        var lname = req.params.lname;
        var ssn = req.params.ssn;
        var bdate = req.params.bdate;
        var address = req.params.address;
        var sex = req.params.sex;
        var salary = req.params.salary;
        var super_ssn = req.params.super_ssn;
        var dno = req.params.dno;

        //It inserts a new row to the EMPLOYEE table using the following module
        myModules.update(res, fname, minit, lname, ssn, bdate, address, sex, salary, super_ssn, dno);                
    } 
);//End add route

router.get
(
    '/delete/:ssn', 
    function (req, res)
    {
        //Variables
        //It gets the param
        var ssn = req.params.ssn;
        
        //It inserts a new row to the EMPLOYEE table using the following module
        myModules.delete_row(res, ssn);                
    } 
);//End delete route

/*=======================================End EMPLOYEE routes======================================= */

/*========================================DEPARTMENT routes======================================== */

//It exports the module, it becomes it available to other external files
module.exports = router;