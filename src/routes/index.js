const siteRouter = require("./site")
const authorRouter = require("./author")
const classRouter = require("./class")

function route(app) {

    app.use('/class', classRouter);
    app.use('/author', authorRouter);
    app.use('/', siteRouter);

}

module.exports = route;