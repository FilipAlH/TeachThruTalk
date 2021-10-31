const router = require('express').Router();
const languages = require('./languages')
const threads = require("./threadRouter")
const homepage = require('../homepageRoute')
const replies = require('./replyRouter')
const translate= require('./translateRouter')

router.use('/languages', languages);
router.use('/threads', threads);
router.use('/replies', replies);
router.use('/', homepage)
router.use('/translate', translate)

module.exports = router;