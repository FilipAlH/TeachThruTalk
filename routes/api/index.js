const router = require('express').Router();
const languages = require('./languages')
const threads = require("./threadRouter")

router.use('/languages', languages);
router.use('/threads', threads);

module.exports = router;