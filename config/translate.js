const request = require('request');

function translateText(bodyText,target){
    console.log(bodyText);
    const options = {
      method: 'POST',
      url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'x-rapidapi-key': '52139b04a5msh3fc3c1fbe84ef1ep1e3b45jsn1768666425f9',
        useQueryString: true
      },
      body: {q: `${bodyText}`, source: 'en', target: `${target}`},
      json: true
    };
    
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        // console.log(body);
         console.log(`${body.data.translations.translatedText}`);
        
        //return translated text as string
        return `${body.data.translations.translatedText}`
    });
}
//Example function call, uncomment and do  'node config/translate.js'
//translateText('Hey this thing actually works!?','ko');

module.exports={translateText}