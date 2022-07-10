const { v4: uuidv4 } = require('uuid');

const taskModel = require('../models/task');
const sectionModel = require('../models/section');
const collaborativeModel = require('../models/collaborative');
const commentModel = require('../models/comment');

exports.getTasksOfProject = async (req, res) => {
    const {projectId} = req.query;

    try {
        const sections = await sectionModel.find({projectId});
        const listSectionId = sections.map(section => section.id);

        const tasks = await taskModel.fetchTasksOfProject(listSectionId);
        // for(let idx =0; idx < tasks.length; idx++) {
        //     tasks[idx].numSubTasks = await taskModel.countSubTasks(tasks[idx].id);
        //     tasks[idx].numComments  = await commentModel.countCommentOfTask(tasks[idx].id);
        // }
        res.json({success:true, message: 'Get tasks Successfully', tasks});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.getTasksOfSection = async (req, res) => {
    const {sectionId} = req.query;
    try {
        const tasks = await taskModel.findBySectionId(sectionId);
        res.json({success: true, message:'Get tasks of section successfully', tasks: tasks});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: err.stack});
    }
} 

exports.addTask = async (req, res) => {
    const userId = req.userId;
    const {sectionId} = req.query;
    const {content, priority, type, dueDate, parentTask} = req.body;
    try {
        const section = await sectionModel.findById({id: sectionId});
        const authorized = await collaborativeModel.findById({projectId: section.projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});

        const newTask = {
            id: uuidv4(),
            content,
            ordinalNum: await taskModel.maxOrdinalNum(sectionId) + 1,
            subOrdinalNum: 1,
            priority: priority || null,
            type: type || 'INCOMPLETED',
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            dueDate: dueDate || null,
            parentTask: parentTask || null,
            createdUser: userId,
            sectionId,
        }
        
        await taskModel.add(newTask);
        res.json({success:true, message: 'Add task Successfully', task: newTask});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.duplicateTask = async (req, res) => {
    const userId = req.userId;
    const {taskId} = req.query;
    try{
        const task = await taskModel.findById({id: taskId});
        const section = await sectionModel.findById({id: task.sectionId});
        const authorized = await collaborativeModel.findById({projectId: section.projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});

        const newTask = {
            ...task,
            id: uuidv4(),
            content: `Copy of ${task.content}`,
            ordinalNum:  await taskModel.maxOrdinalNum(task.sectionId) + 1,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            createdUser: userId,
        }
        await taskModel.add(newTask);

        res.json({success: true, message: 'Duplicate task successfully', task: newTask});
    }
    catch (err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.updateTask = async (req, res) => {
    const userId = req.userId;
    const sectionId = req.body.sectionId || req.query.sectionId;
    const {taskId} = req.params;
    const {content, type, priority, dueDate, assignee, ordinalNum} = req.body;
    const updatedTask = {
        id: taskId,
        content,
        type,
        priority,
        dueDate: new Date(dueDate),
        ordinalNum,
        assignee,
        sectionId,
    }
    Object.keys(updatedTask).forEach(key => {
        if(updatedTask[key] === undefined)
            delete updatedTask[key];
    })

    try {
        const section = await sectionModel.findById({id: sectionId});
        const authorized = await collaborativeModel.findById({projectId: section.projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});

        await taskModel.update(updatedTask);
        res.json({success:true, message: 'Update task Successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.deleteTask = async (req, res) => {
    const userId = req.userId;
    const {sectionId} = req.query;
    const {taskId} = req.params;
    try {
        const section = await sectionModel.findById({id: sectionId});
        const authorized = await collaborativeModel.findById({projectId: section.projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});
        // //Xóa các comment của task đó
        // await commentModel.delete({taskId: taskId});
        
        await taskModel.delete({id: taskId});
        res.json({success:true, message: 'Delete task Successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}