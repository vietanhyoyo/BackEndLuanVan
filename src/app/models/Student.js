const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    account: { type: Schema.Types.ObjectId, ref: 'Account', require: true },
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
    phoneNumber: { type: String, maxlength: 20 },
    parent: { type: String, maxlength: 255 },
    address: { type: String, maxlength: 255 },
    idStudent: { type: String, maxlegth: 20, unique: true },
    healthInsurance: { type: String, maxlength: 20 },
    refreshToken: { type: String, maxlength: 255, default: null },
    isDelete: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', Student);