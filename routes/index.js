const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoute = require('./homepageRoute')

router.use('/', homepageRoute);
router.use('/api', apiRoutes);

module.exports = router;