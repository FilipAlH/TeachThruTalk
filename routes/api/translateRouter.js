<<<<<<< HEAD
const router = require('express').Router();
const translate = require('deepl');
const { translateText } = require('../../helpers/translateText');


router.get('/',async (req,res)=>{
    let text=req.body.text
    let lang =req.body.language

    const translation = await translateText(text,lang)
    res.json({translation:translation})

   
})
=======
const router = require("express").Router();
const { translateText } = require("../../helpers/translateText");

router.post("/", async (req, res) => {
  let text = req.body.text;
  let lang = req.body.language;
  const translation = await translateText(text, lang);
  res.json({ translation: translation });
});
>>>>>>> origin

module.exports = router;