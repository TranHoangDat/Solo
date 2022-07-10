const { v4: uuidv4 } = require('uuid');

const commentModel = require('../models/comment');
const collaborativeModel = require('../models/collaborative');

exports.getComments = async (req, res) => {
    const userId = req.userId
    const {projectId, taskId} = req.query;

    try {
        const condition = {
            projectId: projectId,
            taskId: taskId,
        }
        Object.keys(condition).forEach(key => {
            if(condition[key] === undefined)
                delete condition[key];
        })
    
        const comments = await commentModel.find(condition);
        res.json({success: true, message: 'Get comments successfully', comments});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: err.message});
    }
}

exports.postComment = async (req, res) => {
    const userId = req.userId
    const {projectId, taskId} = req.query;
    const {content, attachedFile} = req.body;

    try {
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to post comment'});
        
        const comment = {
            id: uuidv4(),
            content,
            attachedFile,
            postedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            postedUser: userId,
            projectId,
            taskId
        }

        await commentModel.add(comment);
        res.json({success: true, message: 'Post comment successfully', comment});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: err.message});
    }
}

exports.deleteComment = async (req, res) => {
    const userId = req.userId
    const {commentId} = req.params;
    
    try {
        const comment = await commentModel.find({id: commentId});
        //Kiểm tra người dùng chỉnh sửa có trong bảng collaborative
        const authorized = await collaborativeModel.findById({projectId: comment.projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to post comment'});

        await commentModel.delete({id: commentId});
        res.json({success: true, message: 'Post comment successfully'});
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: err.message});
    }
}