'use strict';

const express = require("express");
const app = express();
const passport = require("passport");
var session = require("express-session");
let bodyParser = require("body-parser");
const flash = require("express-flash");
const cors = require('cors');

app.set("view engine", "pug");

app.set('models', require('./sequelize/models')); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/', routes);

app.use( (req, res, next) => {
    let error = new Error('sorry, not found.');
    error.status = 404;
    next(error);
});

app.use( (err, req, res, next) => {
    console.log(err)
    res.status(err.status||500);
    res.json({
    message:"A problem occurred.",
	err: err
    })
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
