const express = require("express");
const morgan = require("morgan")
const app = express();

//Dung cors de web khong bi chan
const cors = require("cors");
app.use(cors())

//Dung morgan de kiem tra su kien tren trinh duyet
app.use(morgan('combined'))

//Dung csdl
const db = require('./config/db')
db.connect()

app.use(express.json());
//Dugn bien moi truong env
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

//Khai bao route
const route = require('./routes');
route(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})
