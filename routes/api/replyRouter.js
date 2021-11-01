const router = require('express').Router();
const { Reply, Thread, User } = require('../../models');
const withAuth =require('../../utils/auth');

//Grab reply by thread id
router.get('/:id', withAuth,async (req, res) => {
    try {
        const replyData = await Reply.findAll({
            where: { thread_id: req.params.id },
            include: [{ model: Thread }, { model: User }]
        });
        const replies = replyData.map((reply) => reply.get({ plain: true }))
        const thread = replyData[0].thread.title;
        const user = replyData[0].user.name

        res.render('reply', {
            replies, thread, user, loggedIn: req.session.loggedIn
        })
    } catch (error) {
        res.status(500).json(error);
    }
});

//create a new reply
router.post('/:id', async (req, res) => {
    // create a reply
    console.log(req.params)
    try {
      const reply = await Reply.create({
        body: req.body.body,
        thread_id: req.params.id,
        user_id: req.session.user_id
      });
      res.status(200).json(reply);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;