const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    title: { type: String, default: 'string' },
    description: String,
    image: String,
    createdAt: Date,
    updateAt: Date,
});

module.exports = mongoose.model('Course', Course);
