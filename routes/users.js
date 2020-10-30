const express = require('express')
const router = express.Router()
const myDB = require('../config/myDB.js')
// @route GET /users
// @desc 

// router.get('/', (req, res) => res.send('User route'));

router.get('/', (req, res) => {
    const page = req.query.page || 1;
    try {
        // const users = myDB.getUsers(1), { users: users }
        res.render('users')
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router;