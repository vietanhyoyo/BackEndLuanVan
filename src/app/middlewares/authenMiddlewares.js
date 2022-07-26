const jwt = require("jsonwebtoken")

function authenMiddleware(req, res, next) {
    const authorization = req.headers['authorization'];
    //'Beaer [token]'
    const token = authorization.split(' ')[1];
    if (!token) res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        console.log(err, data)
    });
}

module.exports = authenMiddleware;