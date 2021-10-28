// Required
const express = require("express");
const languages = require("./languages");

// Declaring App
const app = express();

// Middleware
app.use("/language", languagesRouter);

// Exporting app
module.exports = app;