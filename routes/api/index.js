const router = require('express').Router();
const languages = require('./languages')
const threads = require("./threadRouter")
const homepage = require('../homepageRoute')

router.use('/languages', languages);
router.use('/threads', threads);
router.use('/', homepage)

module.exports = router;