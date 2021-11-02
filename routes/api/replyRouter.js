const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth =require('../../utils/auth');

//Grab reply by thread id
router.get('/:id', withAuth,async (req, res) => {
    try {
        const replyData = await Reply.findAll({
            where: {
                thread_id: req.params.id,
            }
        });
        console.log(replyData)
        const replies = replyData.map((reply) => reply.get({ plain: true }))
        res.render('reply', {
            replies , loggedIn: req.session.loggedIn
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