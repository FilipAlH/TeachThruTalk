const router = require('express').Router();
const { Reply } = require('../../models');

//Grab reply by thread id
router.get('/:id', async (req, res) => {
    try {
        const replyData = await Reply.findAll({
            where: {
                reply_id: req.params.id
            }, 
        });
        const replys = replyData.map((reply) => reply.get({ plain: true }))
        res.render('replys', {
            replys
        })

    } catch (error) {
        res.status(500).json(error);
    }
});

//create a new reply
router.post('/', async (req, res) => {
    // create a reply
    try {
      const reply = await Reply.create(req.body);
      res.status(200).json(reply);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;