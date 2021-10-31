const { response } = require('express');
const {translateText}=require('./translateText');

translateText('Hola como estas?',"FR").then(response=>console.log(response));