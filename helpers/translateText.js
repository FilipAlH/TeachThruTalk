const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, '../.env')})
const auth_key = process.env.AUTH_KEY;
const  translate = require("deepl");

async function translateText(data, targLang){

   const result=  await translate({
        free_api:true,
        text:data,
        target_lang: targLang,
        auth_key: auth_key
    })
    
    return result.data.translations[0].text;
}

module.exports = {translateText};