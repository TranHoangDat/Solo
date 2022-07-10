const { v4: uuidv4 } = require('uuid');

const userModel = require('../models/user');
const projectModel = require('../models/project');
const collaborativeModel = require('../models/collaborative');
const sharingModel = require('../models/sharing');
const sectionModel = require('../models/section');
const taskModel = require('../models/task');
const activityModel = require('../models/activity');
const commentModel = require('../models/comment');

const {defaultSection} = require('../config/config');

exports.getProjects = async (req, res) => {
    const userId = req.userId;

    try {
        //Lấy các dòng liên quan đến tham gia dự án join với bảng dự án
        const projects = await collaborativeModel.joinWithProject(userId);
        for(let idx = 0; idx<projects.length; idx++) {
            let sections = await sectionModel.find({projectId: projects[idx].id});
            let listSectionId = sections.map(section => section.id);
            projects[idx].numIncompletedTasks = await taskModel.countIncompletedTasks(listSectionId);
            projects[idx].numCollaborators = await collaborativeModel.countCollaborators(projects[idx].id);
        }
        res.json({success: true, message: 'Get projects successfully', projects});
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: 'Internal server error'});
    }
}

exports.getDefaultProject = async (req, res) => {
    const userId = req.userId;

    try {
        //Lấy các dòng liên quan đến tham gia dự án join với bảng dự án
        const projects = await collaborativeModel.joinWithProject(userId);

        let tasks = [];
        for(let idx = 0; idx<projects.length; idx++) {
            let sections = await sectionModel.find({projectId: projects[idx].id});
            let listSectionId = sections.map(section => section.id);
            const data = await taskModel.fetchTasksOfDefaultProject(listSectionId);
            tasks = tasks.concat(data);
        }

        //Trả về danh sách các công việc của dự án mặc định today
        res.json({success: true, message: 'Get data of today project', tasks});
    }
    catch (err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.addProject = async (req, res) => {
    const {name, color, view, isFavorite} = req.body;
    const userId = req.userId;

    if(!name) 
        return res
            .status(400)
            .json({success:false, message: 'Name is required'});
     
    try {
        const newProject = {
            id: uuidv4(),
            name,
            color,
            view,
            type: 'COLLABORATIVE',
            ordinalNum: await projectModel.max(userId) + 1,
            ownerId: userId,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            isFavorite: isFavorite || false,
        }
        //Thêm dữ liệu vào bảng dự án và tham gia dự án
        await projectModel.add(newProject);
        await collaborativeModel.add({
            collaboratorId: userId, 
            projectId: newProject.id,
            joinedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB')
        });

        //Tạo 1 section default
        await sectionModel.add({
            ...defaultSection, 
            id: newProject.id,
            createdUser: userId,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            projectId: newProject.id,
        });

        res.json({success: true, message: 'Create project successfully', project: newProject});
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});;
    }
}

exports.duplicateProject = async (req, res) => {
    const userId = req.userId;
    const {projectId} = req.query;
     
    try {
        const project = await projectModel.findById(projectId);
        const duplicateProject = {
            ...project,
            id: uuidv4(),
            name: `Copy of ${project.name}`,
            ordinalNum: await projectModel.max(userId) + 1,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            ownerId: userId,
        }
        console.log(duplicateProject);

        //Thêm dữ liệu vào bảng dự án và tham gia dự án
        await projectModel.add(duplicateProject);
        await collaborativeModel.add({
            collaboratorId: userId, 
            projectId: duplicateProject.id,
            joinedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB')
        });

        //Copy các section và task trong project
        const listSections = await sectionModel.findByProjectId(projectId);
        for (let section of listSections) {
            let newSection ={
                ...section,
                id: uuidv4(),
                createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
                createdUser: userId,
                projectId: duplicateProject.id,
            };
            await sectionModel.add(newSection)

            let listTasks = await taskModel.find({sectionId: section.id});
            for(let task of listTasks) {
                await taskModel.add({
                    ...task,
                    id: uuidv4(),
                    createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
                    createdUser: userId,
                    sectionId: newSection.id,
                })
            }
        }

        res.json({success: true, message: 'Duplicate project successfully', project: duplicateProject });
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});;
    }
}

exports.updateProject = async (req, res) => {
    const userId = req.userId;
    const {projectId} = req.params;
    const {name, color, view, isFavorite} = req.body;
    const updatedProject = {
        id: projectId,
        name,
        color,
        view,
        isFavorite,
    }

    Object.keys(updatedProject).forEach(key => {
        if(updatedProject[key] === undefined)
            delete updatedProject[key];
    })
    try {
        
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to update project'});

        //Lưu lại hoạt động của người dùng
        await activityModel.add({
            userId,
            projectId,
            activityType: 1,
            objectId: projectId
        })

        //Lưu cập nhật dự án
        await projectModel.update(updatedProject);

        res.json({success: true, message: 'Update project successfully'});
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.deleteProject = async (req, res) => {
    const userId = req.userId;
    const {projectId} = req.params;

    try {
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to delete project'});

        //Xóa các mối quan hệ của dự án đó
        await collaborativeModel.delete({projectId})
        await sharingModel.delete({projectId});
        const sections = await sectionModel.find({projectId});
        for(let section of sections) {
            await taskModel.delete({sectionId: section.id});
            await sectionModel.delete({id: section.id});
        }

        //Xóa dự án
        await projectModel.delete({id: projectId});

        res.json({success: true, message: 'Delete project successfully'});
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.getCollaboratorsOfProject = async (req, res) => {
    const {projectId} = req.query;
    
    try {
        const collaborators = await collaborativeModel.getCollaborators(projectId);
        res.json({success: true, collaborators});
    }   
    catch (err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.removeCollaborator = async(req, res) => {
    const userId = req.userId;
    const {collaboratorId, projectId} = req.query;

    try {
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized'});
        
        await collaborativeModel.delete({projectId, collaboratorId});
        res.json({success: true, message: 'Remove collaborator successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.getInvitations = async (req, res) => {
    const userId = req.userId;

    try {
        const invitations = await sharingModel.getInvitation(userId);
        res.json({success: true, message: 'Get invitations successfully', invitations});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.acceptInvitation = async (req, res) => {
    const userId = req.userId;
    const {projectId} = req.query;

    try {
        //Kiểm tra người dùng đã được mời chưa
        const checked = await sharingModel.findById({projectId, invitedUser: userId});
        if(!checked) 
            return res.status(401)
                .json({success: false, message: 'User is not invited to project'});

        //Thêm người dùng vào bảng tham gia và xóa trong bảng sharing
        await collaborativeModel.add({
            projectId,
            collaboratorId: userId,
            joinedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
        });
        await sharingModel.delete({projectId, invitedUser: userId});
        
        const project = await projectModel.findById(projectId);
        res.json({success: true, message: 'Joined project successfully', project});
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.denyInvitation = async (req, res) => {
    const userId = req.userId;
    const {projectId} = req.query;

    try{
        await sharingModel.delete({projectId, invitedUser: userId});

        res.json({success: true, message: 'Deny invitation successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.getInvitedUser = async (req, res) => {
    const {projectId} = req.query;

    try {
        const rows = await sharingModel.findByProjectId(projectId);
        res.json({success: true, message: 'Get list invited user successfully', invitedUsers: rows});
    }
    catch (err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.inviteUser = async (req, res) => {
    const userId = req.userId;
    const { email, projectId } = req.query;
    let {invitedUser} = req.query;
    try {
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to invite user'});

        if(!invitedUser) {
            const user  = await userModel.findByEmail(email);
            if(!user) 
                return res.status(401)
                .json({success: false, message: 'User not found'});
            invitedUser = user.id;
        }
        // //Kiểm tra người dùng đã tham gia dự án chưa
        const isJoined = await collaborativeModel.findById({projectId, collaboratorId: invitedUser});
        if(isJoined)
            return res.status(401)
                    .json({success: false, message: 'User has already joined in poject'});

        // //Kiểm tra người dùng đã được mời chưa
        const isInvited = await sharingModel.findById({projectId, invitedUser});
        if(isInvited) 
            return res.status(401)
                .json({success: false, message: 'User was previously invited'});

        const sharing = {
            projectId,
            invitedUser,
            sharedUser: userId,
            sharedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
        }
        await sharingModel.add(sharing);
        const user = await sharingModel.getInvitedUser(projectId, invitedUser);
        
        res.json({success: true, message: 'Invite user successfully', invitedUser: user});
    }
    catch(err){
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.removeUser = async (req, res) => {
    const userId = req.userId;
    const {invitedUser, projectId} = req.query;
    try {
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to remove user'});

        await sharingModel.delete({projectId, invitedUser});

        res.json({success:true, message: 'Delete pending user successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}

exports.inviteFromOtherProject = async (req, res) => {
    const userId = req.userId;
    const {invitedProject, projectId} = req.query;
    try {
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId,collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to invite user'});

        //Lấy danh sách người dùng của dự án đã được mời 
        const collaborators = await collaborativeModel.getCollaborators(invitedProject);

        for(let idx=0; idx<collaborators.length; idx++) {
            //Kiểm tra người dùng đã tham gia vào project chưa
            let isJoined = await collaborativeModel.findById({projectId,collaboratorId: collaborators[idx].id});
            if(isJoinned)
                break;

            //Kiểm tra người dùng đã được mời chưa
            let isInvited = await sharingModel.findById({projectId, invitedUser});
            if(isInvited) 
                break;
        
            const sharing = {
                projectId,
                invitedUser: collaborators[idx].id,
                sharedUser: userId,
                sharedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            }
            await sharingModel.add(sharing);
        }
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success:false, message: err.message});
    }
}