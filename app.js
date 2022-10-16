require('./db/connect');
const express = require("express");
const app = express()
const routerV1 = require('./routers/v1');
const connectDB = require('./db/connect')
require('dotenv').config()
console.log('Task Manager App');
app.use(express.json())
app.use('/v1/task',routerV1)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB');
        app.listen(5000, console.log('Listening on the LocalHost 5000'))
    } catch (error) {
        console.log('Error Occur while start => ', error);
    }
}

start()

