const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        required: true,
        unique: true

    },
    password: String
})

const UsersModel = mongoose.model('Users', UsersSchema)

module.exports = UsersModel;