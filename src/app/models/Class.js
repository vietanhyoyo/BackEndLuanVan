const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
    name: { type: String, maxlength: 10, require: true },
    grade: { type: Schema.Types.ObjectId, ref: 'Grade', require: true },
    schoolYear: { type: Schema.Types.ObjectId, ref: 'SchoolYear', require: true },
    isDelete: { type: Boolean, default: false },
})

module.exports = mongoose.model('Class', Class);