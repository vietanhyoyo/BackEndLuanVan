const experss = require('express');
const route = experss.Router();

const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const lessonController = require('../app/controllers/LessonController')

route.post('/get-all', authenMiddleware, lessonController.getWeekList);

module.exports = route