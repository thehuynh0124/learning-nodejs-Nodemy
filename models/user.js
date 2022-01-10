const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: String,
    password: String
},
{
    collection: 'user'
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
