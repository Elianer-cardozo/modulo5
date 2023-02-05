//conectando com o banco de dados
const path = require("path");
const {PATH_DB}= require("dotenv").config().parsed;
const {Database} = require("sqlite3");

module.exports = new Database(path.resolve()+PATH_DB);