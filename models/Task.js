const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        require: [true, 'Must Provide Name'],
        trim: true,
        maxlength: [30, 'Name cannot be more than 30 Length']
    },
    completed:{
        type:Boolean,
        require: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)