const Task = require('../../models/Task')

const createNewTask = async (req,resp) => {
    try {
        const task = await Task.create(req.body);
        resp.status(201).json({task});
    } catch (error) {
        return resp.status(500).json({success: false, msg: error.message, error: error.value});
    }
}

const getSingleTask = async (req,resp) => {
    try {
        const id = req.params.id
        const task = await Task.findById({_id: id});
        resp.status(200).json(task);
    } catch (error) {
        return resp.status(500).json({success: false, msg: error.message, error: error.value});
    }
}

const getAllTasks = async (req,resp) => {
    try {
        const task = await Task.find({});
        resp.status(200).json(task);
    } catch (error) {
        return resp.status(500).json({success: false, msg: error.message, error: error.value});
    }
}

const deleteSingleTask = async (req,resp) => {
    try {
        const id = req.params.id
        const task = await Task.findOneAndDelete({_id: id});
        resp.status(200).json(task);
    } catch (error) {
        return resp.status(500).json({success: false, msg: error.message, error: error.value});
    }
}

const updateSingleTask = async (req,resp) => {
    try {
        const id = req.params.id
        let task = await Task.findOneAndUpdate({
            _id: id,
            ...req.body
        });
        task = await Task.findById({_id: id});
        resp.status(200).json(task);
    } catch (error) {
        return resp.status(500).json({success: false, msg: error.message, error: error.value});
    }
}

module.exports = {
    createNewTask,
    getSingleTask,
    getAllTasks,
    updateSingleTask,
    deleteSingleTask
}