const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    timeTaken: {type: Number}
})

module.exports = mongoose.models.User || mongoose.model('User', UsersSchema, 'Users');