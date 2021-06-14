const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    avatar: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
},
    { timestamps: true }
    );

const User = mongoose.model('Users', userSchema);

module.exports = User;