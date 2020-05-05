/* 
Name:         Roger Silva Santos Aguiar
Function:     Server for the application 
Initial date: May 5, 2020
Last update:  May 5, 2020 
*/
const express = require('express');
const app = express();
const port = 5000

//It uses this file to access the routes
app.use('/', require('./routes/routes'));

/* app.get
(
    '/', 
    function (req, res)
    {
        res.send('<h1>Home</h1>')
    } 
) */

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))