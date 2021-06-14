const express = require('express');
const userRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Delete

// Update

// Create
userRouter.post('/', async (req, res) => {
    console.log(req.body);
    User.create(req.body).then((newUser) => res.send(newUser)).catch((error) => res.send(error))
})

// Show
userRouter.get('/:id', (req, res) => {

})

module.exports = userRouter;