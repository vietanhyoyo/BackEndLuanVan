const bcrypt = require('bcrypt-nodejs');
const Account = require('../models/Account');
const Teacher = require('../models/Teacher');

class TeacherController {

    async addTeacher(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            const data = req.body;
            const availableAccount = await Account.findOne({ username: data.username })
            if (availableAccount) res.send({ status: 'Error', message: 'Tên đăng nhập đã được sử dụng!' });
            else {
                try {
                    const newPass = await bcrypt.hashSync(data.password, bcrypt.genSaltSync(5), null);
                    const newAccount = await Account.create({
                        username: data.username,
                        password: newPass,
                        name: data.name,
                        role: 1
                    })
                    const newTeacher = await Teacher.create({
                        account: newAccount._id,
                        ethnic: data.ethnic,
                        birthday: data.birthday,
                        identityCard: data.identityCard,
                        homeTown: data.homeTown,
                        residence: data.residence,
                        phone: data.phone,
                        email: data.email,
                        avatar: data.avatar,
                        socialInsurance: data.socialInsurance,
                        homeroomClass: data.homeroomClass,
                        homeroomTeacher: data.homeroomTeacher
                    })
                    res.send({ status: 'Success', data: newTeacher, message: 'Tạo thành công giáo viên mới!' })
                } catch (error) {
                    res.send({ status: 'Error', message: 'Lỗi khi tạo tài khoản!', error });
                }
            }
        }
    }

    async getAllTeacher(req, res) {
        const teachers = await Teacher.find({ isDelete: false })
        .populate({ path: 'account', model: 'Account' })
        .populate({ path: 'homeroomClass', model: 'Class' })
        res.send(teachers);
    }

    async deleteTeacher(req, res) {
        if (!req.body.idTeacher || !req.body.idAccount) res.sendStatus(400);
        else {
            try {
                await Teacher.deleteOne({ _id: req.body.idTeacher });
                await Account.deleteOne({ _id: req.body.idAccount });
                res.send({ status: 'Success', message: 'Xóa thành công!' })
            } catch (error) {
                res.send({ status: 'Error', message: 'Lỗi khi xóa!', error })
            }
        }
    }

}

module.exports = new TeacherController;