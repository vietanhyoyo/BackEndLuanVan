const siteRouter = require("./site")
const authorRouter = require("./author")
const classRouter = require("./class")
const adminRouter = require("./admin")
const teacherRouter = require("./teacher")
const studentRouter = require("./student")
const subjectRouter = require("./subject")
const gradeRouter = require("./grade")
const scheduleRouter = require("./schedule")

function route(app) {

    app.use('/schedule', scheduleRouter);
    app.use('/admin', adminRouter);
    app.use('/class', classRouter);
    app.use('/author', authorRouter);
    app.use('/teacher', teacherRouter);
    app.use('/student', studentRouter);
    app.use('/subject', subjectRouter);
    app.use('/grade', gradeRouter);
    app.use('/', siteRouter);

}

module.exports = route;