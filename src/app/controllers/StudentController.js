const bcrypt = require('bcrypt-nodejs');
const Account = require('../models/Account');
const Student = require('../models/Student');

class StudentController {

    async addStudent(req, res) {
        try {
            if (!req.body) res.sendStatus(400);
            else {
                const data = req.body;
                const availableAccount = await Account.findOne({ username: data.username });

                if (availableAccount) res.send({ status: 'Error', message: 'Tên đăng nhập đã được sử dụng!' });
                else {
                    const newPass = await bcrypt.hashSync(data.password, bcrypt.genSaltSync(5), null);
                    const newAccount = await Account.create({
                        username: data.username,
                        password: newPass,
                        name: data.name,
                        role: 2
                    })
                    const newStudent = await Student.create({
                        name: data.name,
                        account: newAccount._id,
                        idStudent: data.idStudent,
                        class: data.class,
                        address: data.address,
                        parent: data.parent,
                        ethnic: data.ethnic,
                        birthday: data.birthday,
                        phoneNumber: data.phoneNumber,
                        email: data.email,
                        avatar: data.avatar
                    })
                    res.send({ status: 'Success', data: newStudent, message: 'Tạo thành công học sinh mới!' })
                }
            }
        } catch (error) {
            res.send({ status: 'Error', message: 'Lỗi khi tạo tài khoản!', error });
        }
    }

    async getStudentInClass(req, res) {
        try {
            if (!req.body) res.sendStatus(400);
            else {
                const data = req.body;
                let classFilter = { class: null };
                if(data.class !== null){
                    classFilter = { class: data.class };
                }

                const students = await Student.find(classFilter).populate({ path: 'account', model: 'Account' });
                res.send(students);
            }
        } catch (error) {
            res.send({ status: 'Error', message: 'Lỗi khi lấy dữ liệu!', error });
        }
    }

}

module.exports = new StudentController;