const experss = require('express')
const route = experss.Router();
const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const classController = require('../app/controllers/ClassController')

route.post('/change-class', authenMiddleware, classController.changeClass);
route.post('/delete-class', authenMiddleware, classController.deleteClass);
route.post('/class-list-by-year', authenMiddleware, classController.getClassListByYear);
route.post('/add-new-class', authenMiddleware, classController.addClass);
route.post('/delete-school-year', authenMiddleware, classController.deleteSchoolYear);
route.post('/add-school-year', authenMiddleware, classController.addSchoolYear);
route.get('/school-year', authenMiddleware, classController.getSchoolYear);

module.exports = route