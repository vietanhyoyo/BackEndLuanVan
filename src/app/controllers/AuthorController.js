const jwt = require("jsonwebtoken")

class AuthorController {
    login(req, res) {

        const data = req.body;
        if (data.username !== undefined && data.password !== undefined) {
            if (data.username === "vanh" && data.password === "123456") {
                const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
                res.send({ accessToken, status: "Success" });
            }
            else res.send({ message: "Tai khoan khong dung!", status: "Error" });
        }
        else res.send({ message: "Chua nhap thong tin!", status: "Error" });
    }
}

module.exports = new AuthorController;