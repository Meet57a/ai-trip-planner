const mongoose = require("mongoose");

const { Schema } = mongoose;

const authModel = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Auth', authModel)