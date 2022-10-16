const express = require("express");
const router = express.Router();

const {
    createNewTask,
    getAllTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
} = require('../../conrollers/task.js')

router.route('/').get(getAllTasks).post(createNewTask)
router.route('/taskId/:id')
.get(getSingleTask)
.patch(updateSingleTask)
.delete(deleteSingleTask)


module.exports = router