const Grade = require('../models/Grade');
const Subject = require('../models/Subject');

class SubjectController {

    getSubjects(req, res) {
        Subject.find({}, (err, doc) => {
            if (err) res.send(err);
            else res.send(doc);
        })
    }

    async getSubjectGrade(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            const grade = req.body.grade;
            switch(grade){
                case '1': {
                    const foundGrade = await Grade.findOne({ name: '1' });
                    res.send({ status: "Success", data: foundGrade.subjects });
                    break;
                }
                case '2': {
                    const foundGrade = await Grade.findOne({ name: '2' });
                    res.send({ status: "Success", data: foundGrade.subjects });
                    break;
                }
                case '3': {
                    const foundGrade = await Grade.findOne({ name: '3' });
                    res.send({ status: "Success", data: foundGrade.subjects });
                    break;
                }
                case '4': {
                    const foundGrade = await Grade.findOne({ name: '4' });
                    res.send({ status: "Success", data: foundGrade.subjects });
                    break;
                }
                case '5': {
                    const foundGrade = await Grade.findOne({ name: '5' });
                    res.send({ status: "Success", data: foundGrade.subjects });
                    break;
                }
                default: {
                    res.send({ status: "Error", message: "Lỗi không đúng khối" });
                }
            }
        }
    }

}

module.exports = new SubjectController;