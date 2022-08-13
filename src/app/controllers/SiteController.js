const bcrypt = require('bcrypt-nodejs');
const Account = require('../models/Account');
const Student = require('../models/Student');
const Grade = require('../models/Grade');
const SchoolYear = require('../models/SchoolYear');
const Class = require('../models/Class');

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

    async createAccount(req, res) {

        const newPass = await bcrypt.hashSync('123456', bcrypt.genSaltSync(5), null);

        const newAccount = {
            username: 'vanh1',
            password: newPass,
            name: 'Hồ Minh Thu',
            birthday: '2003-01-10',
            role: 1
        }

        Account.create(newAccount, function (err, account) {
            if (err) res.send(err);
            res.send(account);
        });
    }

    async createStudent(req, res) {
        const newStudent = {
            account: '62f79dfde7601608824212c3',
            phoneNumber: '0123123123',
            parent: 'Ngô Thị Đào',
            address: 'Cần Thơ',
            idStudent: '020204',
            healthInsurance: 'HS09020',
            class: '62f7a03154cab50331538e61'
        }

        Student.create(newStudent, function (err, student) {
            if (err) res.send(err);
            res.send(student);
        });
    }

    createGrade(req, res) {
        Grade.create({
            name: '5'
        }, function (err, data) {
            if (err) res.send(err);
            res.send(data);
        });
    }

    createSchoolYear(req, res) {
        SchoolYear.create({
            name: '2022-2023'
        }, function (err, data) {
            if (err) res.send(err);
            res.send(data);
        });
    }

    createClass(req, res) {
        Class.create({
            name: '1A',
            grade: '62f79823504bbbe461e3eede',
            schoolYear: '62f79d26b91b43d31c9d9545'
        }, function (err, data) {
            if (err) res.send(err);
            res.send(data);
        });
    }
}

module.exports = new SiteController;