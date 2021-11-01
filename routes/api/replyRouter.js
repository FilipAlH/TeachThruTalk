const router = require('express').Router();
const { Reply } = require('../../models');

//Grab reply by thread id
router.get('/:id', async (req, res) => {
    try {
        const replyData = await Reply.findAll({
            where: {
                thread_id: req.params.id
            }
        });
        console.log(replyData)
        const replies = replyData.map((reply) => reply.get({ plain: true }))
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
<<<<<<< HEAD
        body: req.body.body,
        thread_id: req.params.id
      });
=======
          body: req.body.body,
          thread_id: req.params.id
        });
>>>>>>> main
      res.status(200).json(reply);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;