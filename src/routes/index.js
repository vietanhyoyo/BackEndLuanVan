const siteRouter = require("./site")
const authorRouter = require("./author")
const classRouter = require("./class")
const adminRouter = require("./admin")

function route(app) {

    app.use('/admin', adminRouter);
    app.use('/class', classRouter);
    app.use('/author', authorRouter);
    app.use('/', siteRouter);

}

module.exports = route;