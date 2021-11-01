const router = require('express').Router()
const { Language, Reply, Thread, User} = require('../models')
const path = require('path');
require('dotenv').config();
const bcrypt = require('bcrypt')

//get route to retrieve map
router.get('/', async(req, res) => {
    try {
        res.render('homepage')
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
        res.render('login')
    } catch (error) {
        res.status(404).json(error);
    }
});

//post route for login info
router.post('/loginRequest', async (req, res) => {
    try {
        const thisUser = req.body
        const userReportedEmail = await User.findOne({ where: { email: req.body.email }})

        if(!userReportedEmail) {
            res.status(400).json({message: "Incorrect email or password, please try again"})

        } else {
            const validatePassword = bcrypt.compareSync(thisUser.password, userReportedEmail.dataValues.password)
            console.log(req.body)
            if(!validatePassword) {
                res.status(400).json({message: "Incorrect email or password, please try again"})
                return
            }

            res.json({ message: 'You are now logged in!' });
        }
    } catch (error) {
        res.status(404).json(error);
    }
});

//get route for signin page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup')
    } catch (error) {
        res.status(400).json(error);
    }
});

//post route for sign-up info
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        })
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error)
    }
});
 

router.get('/mapInfo', async(req, res) => {
    try {
        const userLocationAndName = await User.findAll({
            attributes: ['name', 'location']
        })

        res.status(200).json(userLocationAndName)
    } catch (error) {
        res.status(404).json(error)
    }
})
module.exports = router