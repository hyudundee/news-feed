const express = require('express')
const router = express.Router()
const myDB = require('../config/myDB.js');


console.log("Here you have myDB", myDB);
// @route GET /users
// @desc

// router.get('/', (req, res) => res.send('User route'));


// Here is an example on how you call it with promises
router.get('/promise', async (req, res) => {
    const page = req.query.page || 1;
    try {
        const users = await myDB.getUsersPromise(1);
        res.render('users', { users: users});
    } catch (err) {
        console.log(err.message)
    }
})

// And here how you call with with callbacks
router.get('/callback', (req, res) => {
    const page = req.query.page || 1;
    try {
        const users = myDB.getUsersCallback(1, (users) => {
          // Notice how the render happens in a nested function
          console.log("got db data", users);
          res.render('users', { users: users});
        });
    } catch (err) {
        console.log(err.message)
    }
})


module.exports = router;