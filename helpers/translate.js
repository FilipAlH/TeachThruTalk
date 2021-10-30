
require('dotenv').config()
const apiKey = process.env.apiKey;
const request = require("request");
let outputText = "";

function translate(data, sourceLanguage, targetLanguage){
    let splitInput = data.split(" ");
    for (let i = 0; i < splitInput.length; i++){
    const options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'x-rapidapi-key': "52139b04a5msh3fc3c1fbe84ef1ep1e3b45jsn1768666425f9",
          useQueryString: true
        },
        body: {q: splitInput[i], source: sourceLanguage, target: targetLanguage},
        json: true
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          console.log(body);
      })};
}

module.exports = { translate };