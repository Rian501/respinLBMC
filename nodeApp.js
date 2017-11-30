'use strict';

const express = require("express");
const app = express();
const passport = require("passport");
var session = require("express-session");
let bodyParser = require("body-parser");
const flash = require("express-flash");
const cors = require('cors');

app.set("view engine", "pug");
app.use("/public", express.static(__dirname + "/public"));

let routes = require("./routes/");

app.set('models', require('./models')); 


//execute passport strategies file
require("./config/passport-strat.js");
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use((req, res, next) => {
  res.locals.session = req.session;
  // console.log('res.locals.session', res.locals.session);
  next();
});
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
