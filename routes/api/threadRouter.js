const router = require('express').Router();
const { Thread } = require('../../models');


//To grab all the threads to be displayed 

router.get('/', async (req, res) => {
    try {
        const threadData = await Thread.findAll();

        // const threads = threadData.map((thread) => thread.get({ plain: true }));

        // res.json(threadData)

        res.render('threads', {
            threadData,
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

//Grab thread by language_id
router.get('/:id', async (req, res) => {
    try {
        const threadData = await Thread.findAll({
            where: {
                language_id: req.params.id
            }, 
        });
        const threads = threadData.map((thread) => thread.get({ plain: true }))
        res.render('threads', {
            threads
        })

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/:id', async (req, res) => {
    try {
        const threadData = await Thread.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.userid,
            language_id: req.params.id
        });
        res.status(200).json(threadData);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;