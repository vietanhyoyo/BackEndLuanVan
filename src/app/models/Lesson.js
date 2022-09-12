const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lesson = new Schema({
    name: { type: String, maxLength: 100 },
    isDelete: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Lesson', Lesson);