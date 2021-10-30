const  translate = require("deepl");

async function translateText(data, targetLan){

   const result=  await translate({
        free_api:true,
        text:data,
        target_lang:targetLan,
        auth_key:"b9cf861c-e361-461f-7cbf-7494b41b1d98:fx"
    })
    return result.data.translations[0].text;
}

module.exports = {translateText};