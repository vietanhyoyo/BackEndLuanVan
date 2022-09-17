const experss = require('express');
const route = experss.Router();

const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const lessonController = require('../app/controllers/LessonController')

route.post('/get-lessons-by-subject-week-grade', authenMiddleware, lessonController.getLessonsBySubjectWeekGrade);
route.post('/get-subject-lesson', authenMiddleware, lessonController.getSubjectLessonListByWeek);
route.post('/add-lesson', authenMiddleware, lessonController.addLesson);
route.post('/get-all', authenMiddleware, lessonController.getWeekList);

module.exports = route