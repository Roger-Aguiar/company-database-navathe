/* 
Name:         Roger Silva Santos Aguiar
Function:     This file contains all the routes of the system
Initial date: May 5, 2020
Last update:  May 12, 2020 
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

//This route shows all the rows of the EMPLOYEE table
router.get
(
    '/employee', 
    function (req, res)
    {
        myModules.show(res);//It shows all the rows or the EMPLOYEE table        
    } 
);

router.get
(
    '/add', 
    function (req, res)
    {
        myModules.insert(res);//It inserts a new row the EMPLOYEE table                
    } 
)

//It exports the module, it becomes it available to other external files
module.exports = router;