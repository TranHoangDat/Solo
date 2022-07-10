const { v4: uuidv4 } = require('uuid');
const sectionModel = require('../models/section');
const collaborativeModel = require('../models/collaborative');
const taskModel = require('../models/task');
const commentModel = require('../models/task');

exports.getSections = async(req, res) => {
    const userId = req.userId;
    const {projectId} = req.query;
    try {
        const sections = await sectionModel.findByProjectId(projectId);

        res.json({success: true, message: 'Get section successfully', sections});
    }
    catch(err)    {
        console.log(err.stack);
        res.status(500).json({success: false, message: err.message});
    }
}

exports.addSection = async(req, res) => {
    const userId = req.userId;
    const {projectId} = req.query;
    const {name, type} = req.body;

    try {
        const authorized = await collaborativeModel.findById({projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});
        
        const newSection = {
            id: uuidv4(),
            name,
            ordinalNum: await sectionModel.max(projectId) + 1,
            type: type || 'NORMAL',
            createdUser: userId,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            projectId,
        }
        await sectionModel.add(newSection);
        res.json({success: true, message: 'Add section successfully', section: newSection});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500).json({success: false, message: err.message});
    }
}

exports.duplicateSection = async (req, res) => {
    const userId = req.userId;
    const {sectionId} = req.query;

    try {
        const section = await sectionModel.findById({id: sectionId});
        //Kiểm tra user có trong bảng tham gia dự án này không
        const authorized = await collaborativeModel.findById({projectId: section.projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});

        const newSection = {
            ...section,
            id: uuidv4(),
            name: `Copy of ${section.name}`,
            ordinalNum: await sectionModel.max(section.projectId) + 1,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            createdUser: userId,
        }
        await sectionModel.add(newSection);

        const tasks = await taskModel.find({sectionId})
        for (let task of tasks) {
            await taskModel.add({
                ...task,
                id: uuidv4(),
                sectionId: newSection.id,
                createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
                createdUser: userId,
            })
        }

        res.json({success: true, message: 'Duplicate section successfully', section: newSection});
    }
    catch(err) {
        console.log(err.stack);
        return err.stack;
    }
}

exports.updateSection =  async(req, res) => {
    const userId = req.userId;
    const {sectionId} = req.params;
    const {name, type} = req.body;

    try {
        const section = await sectionModel.findById({id: sectionId});
        //Kiểm tra user có trong bảng tham gia dự án này không
        const authorized = await collaborativeModel.findById({projectId: section.projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});

        const updateSection = {
            ...section,
            id: sectionId,
            name,
            type,
        }
        await sectionModel.update(section);
        res.json({success: true, message: 'Update section successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500).json({success: false, message: err.message});
    }
}

exports.deleteSection = async(req, res) => {
    const userId = req.userId;
    const {sectionId} = req.params;

    try {
        const section = await sectionModel.findById({id: sectionId});
        const authorized = await collaborativeModel.findById({projectId: section.projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});
        
        const tasks = await taskModel.find({sectionId})

        //Xóa các comment trong từng task
        // for(let task of tasks){
        //     await commentModel.delete({taskId: task.id});
        // }
        
        //Xóa các task con trong section đó
        await taskModel.delete({sectionId});
        
        await sectionModel.delete({id: sectionId});
        res.json({success: true, message: 'Delete section successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500).json({success: false, message: err.message});
    }
}