const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    slug: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Service = mongoose.model('service', ServiceSchema);
module.exports = { Service };