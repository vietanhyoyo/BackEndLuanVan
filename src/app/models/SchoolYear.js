const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolYear = new Schema({
    name: { type: String, maxlength: 9, require: true, unique: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('SchoolYear', SchoolYear);