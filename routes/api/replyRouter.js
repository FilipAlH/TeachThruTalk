const router = require('express').Router();
const { Reply, Thread} = require('../../models');

//Grab reply by reply id
router.get('/:id', async (req, res) => {
    try {
        const replyData = await Reply.findAll({
            where: {
                thread_id: req.params.id
            }
        });
        const replies = replyData.map((reply) => reply.get({ plain: true }))
        console.log(replies)
        res.render('reply', {
            replies
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

//create a new reply
router.post('/:id', async (req, res) => {
    // create a reply
    try {
      const reply = await Reply.create({
        body: req.body.body,
        thread_id: req.params.id
        });
      res.status(200).json(reply);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;