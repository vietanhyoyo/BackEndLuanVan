const Week = require('../models/Week')
const Lesson = require('../models/Lesson')
const Subject = require('../models/Subject')

class LessonController {

    async getWeekList(req, res) {
        if (!req.body.semester) res.sendStatus(400);
        else {
            let data = [];
            if (req.body.semester === "1") {
                data = await Week.find({ semester: "1" });
            }
            if (req.body.semester === "2") {
                data = await Week.find({ semester: "2" });
            }
            res.send(data);
        }
    }

    async addLesson(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            const data = await Lesson.create(req.body);
            res.send(req.body);
        }
    }

    async getSubjectLessonListByWeek(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            const { grade, week } = req.body;
            try {
                const subjectIds = await Lesson.find({ grade, week })
                    .distinct('subject')
                const result = await Subject.find({
                    _id: subjectIds
                })
                res.send(result)
            } catch (error) {
                res.send(error)
            }
        }
    }

}

module.exports = new LessonController;