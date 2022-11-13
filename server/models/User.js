const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true,unique: true},
    password: {type: String, required: true},
    roles:{
        User:Number,
        Admin:Number
    },
    definition: Boolean,
    colorWheel: Boolean,
    timeSpent: Boolean,
    timeLimit: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = {User}