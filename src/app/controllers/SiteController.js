const bcrypt = require('bcrypt-nodejs');
const Student = require('../models/Student');

const data = [
    {
        id: 1,
        name: 'java'
    },
    {
        id: 2,
        name: 'php'
    }
]

class SiteController {

    index(req, res) {
        res.send('Home')
    }

    showHome(req, res) {
        res.json({ status: "Success", dataItem: data });
    }

    async createStudent(req, res) {

        const newPass = await bcrypt.hashSync('123456',bcrypt.genSaltSync(5),null);

        const newStudent = {
            username: 'vanh',
            password: newPass,
            name: 'Trần Trọng Nghĩa',
            birthday: '2010-03-09',
            phoneNumber: '0123123123',
            parent: 'Ngô Thị Đào',
            address: 'Cần Thơ',
            idStudent: '020204',
            healthInsurance: 'HS09020'
        }

        Student.create(newStudent, function (err, student) {
            if (err) res.send(err);
            res.send(student);
        });
    }

}

module.exports = new SiteController;