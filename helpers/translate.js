

const request = require("request");

function translate(data, sourceLanguage, targetLanguage,apiKey){
    console.log(apiKey)
    const options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'x-rapidapi-key': 'a1c49cfef7msh32013d463f0f335p198488jsnd7a369fc6eb8',
          useQueryString: true
        },
        body: {q: data, source: sourceLanguage, target: targetLanguage},
        json: true
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          console.log(body);
      });
}

module.exports = { translate };