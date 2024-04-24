


const mongoose = require('mongoose');


//login Schema

const login = mongoose.Schema({
    email: { type: String, },
    password: { type: String, },
})


module.exports = mongoose.model('LoginUser', login);