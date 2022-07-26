const jwt = require("jsonwebtoken")

class AuthorController{
    login(req, res) {
        //{ username: "test" }
        const data = req.body;
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "60s"});
        res.json({accessToken});
    }
}

module.exports = new AuthorController;