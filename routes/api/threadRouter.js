const router = require('express').Router();
const { Thread, Language, Reply } = require('../../models');


//Get all threads
router.get('/', async (req, res) => {
    try {
        const threadData = await Thread.findAll();
        const threads = threadData.map((thread) => thread.get({ plain: true }));
        console.log(req.body)
        // res.json(threadData)
        res.render('threads', {
            threads,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:language_id', async (req, res) => {
    try {
        const threadData = await Thread.findAll({
            where: {language_id: req.params.language_id}
        });
        const threads = threadData.map((thread) => thread.get({plain: true}))
        res.render('threads', {
            threads
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/:language_id', async (req, res) => {
    try {
        const threadData = await Thread.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.userid,
            language_id: req.params.language_id
        });
        res.status(200).json(threadData);
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;