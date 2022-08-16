const experss = require('express')
const route = experss.Router();
const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const classController = require('../app/controllers/ClassController')

route.post('/delete-school-year', authenMiddleware, classController.deleteSchoolYear);
route.post('/add-school-year', authenMiddleware, classController.addSchoolYear);
route.get('/school-year', authenMiddleware, classController.getSchoolYear);

module.exports = route