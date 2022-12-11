const express = require("express");
const connection = require("./config/db")
const cors = require("cors");

const authRouter = require("./routes/auth.routes")
const shopRouter = require("./routes/shop.routes")
const app = express();

app.use(cors());

app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", shopRouter)

app.use(express.json())

app.listen(8000, async () => {
    try {
        await connection;
        console.log("connected to db successfully")
    }
    catch {
        console.log("something went wrong while connecting to db")
    }
    console.log("Server listening on localhost:8000")
})