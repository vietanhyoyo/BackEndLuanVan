const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Grade = new Schema({
    name: { type: String, maxlength: 2, require: true, unique: true }
})

module.exports = mongoose.model('Grade', Grade);