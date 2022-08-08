const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    username: { type: String, maxlength: 255, require: true, unique: true },
    password: { type: String, maxlength: 255, require: true },
    name: { type: String, maxlength: 255, require: true },
    birthday: { type: Date },
    role: { type: Number, default: 0 },
    phoneNumber: { type: String, maxlength: 20, require: true },
    parent: { type: String, maxlength: 255 },
    address: { type: String, maxlength: 255 },
    idStudent: { type: String, maxlegth: 20 },
    healthInsurance: { type: String, maxlength: 20 },
    refreshToken: { type: String, maxlength: 255, default: null }
}, {
    timestamps: true
})

module.exports = mongoose.model('Student', Student);