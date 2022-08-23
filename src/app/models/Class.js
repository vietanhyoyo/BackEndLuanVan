const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
    name: { type: String, maxlength: 10, require: true },
    grade: { type: String, require: true },
    schoolYear: { type: Schema.Types.ObjectId, ref: 'SchoolYear', require: true },
    isDelete: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Class', Class);