const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt-nodejs');
const Student = require('../models/Student');

class AuthorController {

    async login(req, res) {

        const data = req.body;
        if (data.username !== undefined && data.password !== undefined) {

            const student = await Student.findOne({ username: data.username });

            if (student) {
                //Kiem tra mat khau
                const bool = bcrypt.compareSync(data.password, student.password);
                if (bool) {
                    const accessToken = jwt.sign({ username: data.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
                    const refreshToken = jwt.sign({ username: data.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "12h" });

                    student.refreshToken = refreshToken;
                    await student.save();

                    res.send({ status: "Success", accessToken, refreshToken });
                } else {
                    res.send({ message: "Mat khau khong dung!", status: "Error" });
                }
            }
            else res.send({ message: "Tai khoan khong dung!", status: "Error" });
        }
        else res.send({ message: "Chua nhap thong tin!", status: "Error" });
    }

    async checkRefreshToken(req, res) {
        const reToken = req.body.token;
        if (!reToken) res.sendStatus(401);
        else {

            jwt.verify(reToken, process.env.REFRESH_TOKEN_SECRET, async (err, data) => {
                //console.log(err, data)
                if (err) res.sendStatus(403);
                else {
                    const student = await Student.findOne({ username: data.username });
                    if (!student) res.sendStatus(403);
                    else {
                        if (student.refreshToken === reToken) {
                            const accessToken = jwt.sign({ username: data.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
                            const refreshToken = jwt.sign({ username: data.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "24h" });

                            student.refreshToken = refreshToken;
                            await student.save();

                            res.send({ status: "Success", accessToken, refreshToken });
                        }
                        else res.sendStatus(403);
                    }
                }
            });
        }
    }
}

module.exports = new AuthorController;