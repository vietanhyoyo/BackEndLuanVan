const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: { type: String, maxlength: 255, require: true, unique: true },
    password: { type: String, maxlength: 255, require: true },
    name: { type: String, maxlength: 255, require: true },
    birthday: { type: Date },
    role: { type: Number, default: 0 },
    refreshToken: { type: String, maxlength: 255, default: null },
    isDelete: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Account', Account);