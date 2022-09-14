const Week = require('../models/Week')

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

}

module.exports = new LessonController;