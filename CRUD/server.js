const express = require('express');
const path = require('path');
//const urllib = require('urllib');
const bodyParser = require('body-parser');
const ip = '0.0.0.0';
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

const api = require('./server/routes/api.js');
app.use('/', api);


app.listen(port, ip, function()
{
    console.log(`server is running on IP: '${ip}' port: '${port}'`);
});