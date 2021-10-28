const sequelize = require('../config/connection');
const { Language, Reply, Thread, User } = require('../models');

const LanguageSeed = [
    {
        id: 'en',
        language_name: 'English',
    },
    {
        id: 'ja',
        language_name: 'Japanese',
    },
    {
        id: 'de',
        language_name: 'German',
    },
    {
        id: 'ko',
        language_name: 'Korean',
    }
]

const UserSeed = [
    {
        name: 'Stephany',
        email: 'steph@email.com',
        password: 'password1',
        location: 'Toronto, Ontario'
    },
    {
        name: 'Jeffrey',
        email:'jeff@email.com',
        password:'password2',
        location: 'Hanburg, Germany'
    },
    {
        name: 'Aar',
        email:'Aar@email.com',
        password:'password3',
        location: 'Seoul, Korea'
    },
    {
        name: 'Filip',
        email:'filip@email.com',
        password:'password4',
        location: 'Sau Paulo, Brazil'
    }
]

const ThreadSeed = [
    {
        title: 'How was your day?',
        body: 'In this thread we can discuss our day.',
        user_id: 1,
        language_id: 'en',
    },
    {
        title: 'What is your favorite animal and why?',
        body: 'In this thread we can discuss our favorite animals.',
        user_id: 2,
        language_id: 'de'
    },
    {
        title: 'what is your favorite food - discuss?',
        body: 'what is your favorite food and why is it pizza?',
        user_id: 3,
        language_id: 'ko'
    },
    {
        title: 'who is your favorite foreign celebrity?',
        body: 'mine is Hoyeon Jung',
        user_id: 4,
        language_id: 'ja'
    }
]

const ReplySeed = [
    {
        body: 'it was excellent my good sir.',
        thread_id: 1,
        user_id: 2,
    },
    {
        body: 'i had a terrible day - someone please ask me about it.',
        thread_id: 1,
        user_id: 4,
    },
    {
        body: 'my most heckin goodest doggo.',
        thread_id: 2,
        user_id: 1,
    },
    {
        body: 'cats are the way to go.',
        thread_id: 2,
        user_id: 3,
    },
    {
        body: 'you unclutured swine, the best food is genuine italian pasta.',
        thread_id: 3,
        user_id: 2,
    },
    {
        body: 'i only eat the most traditional of south american cuisine.',
        thread_id: 3,
        user_id: 4,
    },
    {
        body: "mine is dwayne 'the rock' johnson.",
        thread_id: 4,
        user_id: 3,
    },
    {
        body: 'dwayne aint shit, if you arent repping schwartzenegger you arent a fan of bodybuilding.',
        thread_id: 4,
        user_id: 1,
    },
]

module