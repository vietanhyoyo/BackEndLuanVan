const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Week = new Schema({
    name: { type: String, maxLength: 9, required: true, unique: true },
    semester: { type: String, maxLength: 7, required: true },
    schoolYear: { type: Schema.Types.ObjectId, ref: 'SchoolYear', required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    isDelete: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Week', Week);