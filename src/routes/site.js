const experss = require('express')
const route = experss.Router();
const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const siteController = require('../app/controllers/SiteController')

route.post('/create-class', siteController.createClass)
route.post('/create-school-year', siteController.createSchoolYear)
route.post('/create-grade', siteController.createGrade)
route.post('/create-student', siteController.createStudent)
route.post('/create-account', siteController.createAccount)
route.get('/home', authenMiddleware, siteController.showHome)
route.get('/', siteController.index)

module.exports = route