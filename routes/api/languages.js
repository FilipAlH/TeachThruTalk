const router = require('express').Router();
const { Language } = require('../../models');

// Get Languages
router.get('/', async (req, res) => {
  try {
    const languageData = await Language.findAll();
    const languages = languageData.map((element)=>element.get({plain:true}))
    //res.status(200).json(languageData);
    res.render('languages', {languages,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;