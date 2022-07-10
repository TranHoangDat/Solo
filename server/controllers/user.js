const bcrypt = require('bcrypt');
const userModel = require('../models/user');

exports.getUserByEmail = async (req, res) => {
    const {email} = req.query;

    try {   
        const users = userModel.getUsersByEmail(email);

        res.json({success: true, users});
    }
    catch (err) {
        cconsole.log(err.stack);
        res.status(500)
            .json({success: false, message: 'Internal server error'});
    }
}

exports.getProfile = async(req, res) => {
    const userId = req.userId;

    try {
        const user = await userModel.findById({id: userId});
        res.json({success: true, message: 'Get user profile successfully', user});
    }
    catch(err) {
        console.log(err.message);
        req.status(500)
            .json({success: false, message: err.message});
    }
}

exports.updateProfile = async (req, res) => {
    const userId = req.userId;
    const {name, avatar, gmail, type} = req.body;

    const newProfile = {
        id: userId,
        name,
        avatar,
        gmail,
        type
    }
    Object.keys(newProfile).forEach(key => {
        if(newProfile[key] === undefined)
            delete newProfile[key];
    })

    try{
        await userModel.update(newProfile);
        res.json({success: true, message: 'Update user profile successfully'});
    }
    catch (err){
        console.log(err.message);
        res.status(500)
            .json({success: false, message: err.message});
    }
}

exports.updatePassword = async (req, res) => {
    const userId = req.userId;
    const {currentPassword, newPassword} = req.body;

    try {
        const user = await userModel.findById({id: userId});
        const validPassword = await bcrypt.compareSync(currentPassword, user.password);
        if(!validPassword) 
            return res
                .status(401)
                .json({success: false, message: 'Password is incorrect'});
        
        const hash = await bcrypt.hash(newPassword, 10);
        await userModel.update({
            id: userId,
            password: hash
        });
        res.json({success: true, message: 'Update password successfully'});
    }
    catch (err) {
        console.log(err.message);
        res.status(500)
            .json({success: false, message: err.message});
    }
}