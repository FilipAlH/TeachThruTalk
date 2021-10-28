const languages = require("express").Router();
const sequelize = require('../config/connection');
const {
  readFromFile,
} = require("../helpers/fsutil");

// Route for retrieving languages

languages.get("/", (req, res) => {
  readFromFile("./").then((data) => res.json(JSON.parse(data)));
});


// Exporting Languages
module.exports = languages;