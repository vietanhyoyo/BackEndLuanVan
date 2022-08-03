const express = require("express");
const app = express();

//Dung cors de web khong bi chan
const cors = require("cors");
app.use(cors())

app.use(express.json());
//Bien moi truong env
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

//Khai bao route
const route = require('./routes');
route(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})
