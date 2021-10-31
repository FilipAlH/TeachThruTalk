const path = require("path")
require("dotenv").config({path: path.resolve(__dirname, '../.env')})
const auth_key = process.env.AUTH_KEY;
const  translate = require("deepl");

async function translateText(data, targetLan){

   const result=  await translate({
        free_api:true,
        text:data,
        target_lang:targetLan,
        auth_key: auth_key
    })
    return result.data.translations[0].text;}


    
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

modules.export = {}