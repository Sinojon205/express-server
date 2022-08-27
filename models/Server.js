const mongoose = require('mongoose')
const SERVERS = require('./Initialization-data').SERVERS
const ServerSchema = mongoose.Schema({
    ipAddress: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    memory: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
const schema = mongoose.model('Server', ServerSchema);
schema.create(SERVERS)
module.exports = schema
