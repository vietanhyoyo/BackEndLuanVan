
const Student = require('../models/Student')

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

    createStudent(req, res) {
        const newStudent = {
            username: 'vanh1',
            password: '123456',
            name: 'Hồ Duy Hưng',
            birthday: '2013-12-09',
            phoneNumber: '0123123123',
            parent: 'Ngô Thị Đào',
            address: 'Cần Thơ',
            idStudent: '020202',
            healthInsurance: 'HS02022'
        }

        Student.create(newStudent, function (err, student) {
            if (err) return handleError(err);
            res.send(student);
        });
    }

}

module.exports = new SiteController;