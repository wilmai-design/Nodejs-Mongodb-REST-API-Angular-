import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
};

export const createTask = async (req, res) => {
    const newTaks = new Task({ 
        title: req.body.title, 
        description: req.body.description,
        done: req.body.done ? req.body.done : false
    });
    const taskSaved = await newTaks.save();
    // console.log(newTaks);
    res.json(taskSaved);
};

export const findOnetask = async (req, res) => {
    // console.log(req.params);
    const task = await Task.findById(req.params.id);
    res.json(task);
};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Task were deleted successfuly",
    });
};

export const findAllDoneTasks = async (req, res) => {
    const tasks = await Task.find({done: true});
    res.json(tasks);
}

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
    });
    res.json({ message: "Task was updated Successfully" });
}





