const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
//const mongoose = require('mongoose');

const testRoutes = require("./test");

const app = express();

// mongoose.connect('mongodb+srv://mean-course:DCMMtXdOkcF4Ru3e@cluster0-zoqef.mongodb.net/mean-course?retryWrites=true&w=majority')
// .then(() => {
//   console.log('Connected to database!');
// }).catch(() => {
//   console.log('Failed to connect to database!');
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/test", testRoutes);

module.exports = app;
