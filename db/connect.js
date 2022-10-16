const mongoose = require('mongoose')

const connectDB = async (URL) => {
    return mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB