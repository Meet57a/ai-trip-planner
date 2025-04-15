const mongoose = require("mongoose");

const { Schema } = mongoose;

const tripModel = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Auth'
    },
    data: {
        type: {},
        required: true,
    },
},{timestamps: true});

module.exports = mongoose.model('Trip', tripModel)