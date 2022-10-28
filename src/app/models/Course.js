const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    _id: ObjectId,
    title: { type: String, default: 'string' },
    description: String,
    image: String,
    slug: String,
    createdAt: Date,
    updateAt: Date,
});

module.exports = mongoose.model('Course', Course);
