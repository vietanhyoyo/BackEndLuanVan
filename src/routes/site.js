const experss = require('express')
const route = experss.Router();
const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const siteController = require('../app/controllers/SiteController')

route.get('/home', authenMiddleware, siteController.showHome)
route.get('/', siteController.index)

module.exports = route