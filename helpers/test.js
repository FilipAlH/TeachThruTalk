const { translate } = require("./translate");
require('dotenv').config()
const apiKey = process.env.API_KEY;
const text = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur."

translate(text, 'en', 'sp',apiKey)

FIX BRANCH.