const mongoose = require('mongoose');

const ROLES = require('./Initialization-data').ROLES
const RoleSchema = mongoose.Schema({
    name: {type: String, required: true}
})

const roleSchema = mongoose.model('role', RoleSchema);
roleSchema.create(ROLES);
module.exports = roleSchema;
