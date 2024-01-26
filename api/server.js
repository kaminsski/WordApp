const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connect = require("./config/db");
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/user", require("./routes/userRoute"))
app.use("/api/word", require("./routes/wordRoute"))

connect()

app.listen(PORT, ()=>{console.log(`Api Port:${PORT}`);})
