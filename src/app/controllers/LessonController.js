const Week = require('../models/Week')
const Lesson = require('../models/Lesson')
const Subject = require('../models/Subject')
const LessonContent = require('../models/LessonContent')

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

    async getLessonsBySubjectWeekGrade(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            const { grade, week, subject } = req.body;
            try {
                const data = await Lesson.find({ grade, week, subject })
                res.send(data)
            } catch (error) {
                res.send(error)
            }
        }
    }

    async addLessonContent(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            try {
                const { text, lessonID } = req.body;
                const lessonContent = await LessonContent.findOne({ lesson: lessonID })

                if (lessonContent) {
                    const data = await LessonContent.updateOne({ _id: lessonContent._id }, { text, lesson: lessonID })
                    res.send(data);
                } else {
                    const data = await LessonContent.create({ text, lesson: lessonID })
                    res.send(data);
                }

            } catch (error) {
                res.send({ status: 'Error', error, message: 'Lỗi' })
            }

        }
    }

    getLessonContentByLesson(req, res) {
        if (!req.body) res.sendStatus(400);
        else {
            const { lessonID } = req.body;
            LessonContent.findOne({ lesson: lessonID }, (err, doc) => {
                if (err) res.send({ status: 'Error', error: err, message: 'Lỗi' });
                else res.send(doc);
            })
        }
    }

}

module.exports = new LessonController;