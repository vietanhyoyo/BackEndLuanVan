const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Teacher = new Schema({
    name: { type: String, maxlength: 10, require: true },
    account: { type: Schema.Types.ObjectId, ref: 'Account', require: true },
    ethnic: { type: String, maxlength: 20 },
    birthday: { type: Date },
    identityCard: { type: String, maxlength: 50, unique: true },
    homeTown: { type: String, maxlength: 100 },
    residence: { type: String, maxlength: 100 },
    phone: { type: String, maxlength: 12 },
    email: { type: String, maxlength: 30 },
    avatar: { type: String, maxlength: 255 },
    socialInsurance: { type: String, maxlength: 20 },
    homeroomTeacher: { type: Boolean, default: false },
    homeroomClass: { type: Schema.Types.ObjectId, ref: 'Class', default: null },
    isDelete: { type: Boolean, default: false },
}, {
    timestamps: true
})

module.exports = mongoose.model('Teacher', Teacher);