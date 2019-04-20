var createError = require("http-errors"); //Create HTTP errors
var express = require("express");
var path = require("path"); //provides utilities for working with file and directory paths
var cookieParser = require("cookie-parser"); //parses cookies attached to the client request object.
var session = require("express-session");
var logger = require("morgan");

var mainRouter = require("./routes/mainRouter"); //mainRouter will handle all the other routes
var app = express(); //use this if you need only one app tp create => var app = require('express')();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json()); //parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "its a secret!",
    name: "Rajitha",
    resave: true, //Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: true //Forces a session that is "uninitialized" to be saved to the store
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
