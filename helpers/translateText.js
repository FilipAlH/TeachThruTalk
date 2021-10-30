const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, '../.env')})
const auth_key = process.env.AUTH_KEY;
const  translate = require("deepl");

console.log(process.env)

async function translateText(data, targetLan){

   const result=  await translate({
        free_api:true,
        text:data,
        target_lang:targetLan,
        auth_key: auth_key
    })
    return result.data.translations[0].text;
}

module.exports = {translateText};
