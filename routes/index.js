const express = require("express");
const languages = require("./languages");

const app = express();

app.use("/language", languagesRouter);

module.exports = app;