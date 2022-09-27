const experss = require('express')
const route = experss.Router();
const authenMiddleware = require('../app/middlewares/authenMiddlewares')
const linkControler = require('../app/controllers/LinkController')

route.post('/add-link', authenMiddleware, linkControler.add);

module.exports = route