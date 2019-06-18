const express = require('express');
const path = require('path');
const config = require('../config.json');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//importing routes
const moviesRouter = require('./routes/elecciones');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database,
}, 'single'));
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', moviesRouter);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Server Initialize
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});