const router = require('express').Router()
const { Language, Reply, Thread, User} = require('../models')
const path = require('path');
require('dotenv').config();
const bcrypt = require('bcrypt')

//get route to retrieve map
router.get('/map', async(req, res) => {
    try {
        fetch('https://open.mapquestapi.com/staticmap/v5/map?key=GW5siBk1Fwy2BCvl8yiO5vzhjmBVYyL5')
            .then((response) => response.blob())
                .then((imageFromBlob) => {
                    const imageURL = URL.createObjectURL(imageFromBlob)
                    console.log(imageURL)
                    res.json({"image": imageURL})
                })
    } catch(error) {
        console.log('shit failed')
        res.status(501).json(error)
    }
})

//get route to retrieve languages for samples
router.get('/language', async (req, res) => {
    try {
        const LanguageData = await Language.findAll();
        res.status(200).json(LanguageData)
    } catch (error) {
        res.status(404).json(error);
    }
});

//get route for login page
router.get('/login', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, ''))
    } catch (error) {
        res.status(404).json(error);
    }
});

//post route for login info
router.post('/loginRequest', async (req, res) => {
    try {
        const thisUser = req.body
        const userReportedEmail = await User.findOne({ where: { email: req.body.email }})
        console.log(userReportedEmail)
        if(!userReportedEmail) {
            res.status(400).json({message: "Incorrect email or password, please try again"})
        } else {
            thisUser.password = await bcrypt.hash(req.body.password, 10)
            console.log(req.body)
            const validatePassword = bcrypt.compareSync(thisUser.password, userReportedEmail.dataValues.password)

            if(!validatePassword) {
                res.status(400).json({message: "Incorrect email or password, please try again"})
                return
            }

            res.json({ user: userData, message: 'You are now logged in!' });
        }
    } catch (error) {
        res.status(404).json(error);
    }
});

//post route for sign-up info
router.post('/signup', async (req, res) => {
    try {
        const newUser = req.body
        //aready a hook for this
        const userData = await User.create(newUser)
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router