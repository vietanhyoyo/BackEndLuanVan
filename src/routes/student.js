const experss = require('express');
const route = experss.Router();

const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const studentController = require('../app/controllers/StudentController')

route.post('/get-class-student', authenMiddleware, studentController.getStudentInClass);
route.post('/add-student', authenMiddleware, studentController.addStudent);

module.exports = route