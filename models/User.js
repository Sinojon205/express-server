const mongoose = require('mongoose');
const USERS = require('./Initialization-data').USERS;

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    roles: [String]
})

const userSchema = mongoose.model('User', UserSchema);
userSchema.create(USERS);
module.exports = userSchema;
