const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const userModel = require('../models/user');
const projectModel = require('../models/project');
const collaborativeModel = require('../models/collaborative');
const sectionModel = require('../models/section');
const nodemailer = require('../util/nodemailer');
const {defaultProject, defaultSection} = require('../config/config');

exports.getUser = async(req, res) => {
    const userId = req.userId;

    try {
        const user = await userModel.findById({id: userId});
        if(!user) 
            return res
                .status(401)
                .json({success: false, message: 'Access token is invalid'});

        delete user.password;
        res.json({success: true, message: 'Get user profile successfully', user});
    }
    catch(err) {
        console.log(err.stack);
        req.status(500)
            .json({success: false, message: err.message});
    }
}

exports.register = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password)
        return res
            .status(400)
            .json({success: false, message: 'Missing email or password'});
    
    try{
        //Tìm ra thử email đã được đăng ký chưa
        const user= await userModel.findByEmail(email);

        if(user) 
            return res
                .status(400)
                .json({success: false, message: 'Email already exist'});

        //Tạo ra mã xác thực
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length )];
        }

        //Lưu newUser vào csdl
        const hash = await bcrypt.hash(password, 10);
        const newUser = {
            id: uuidv4(),
            name: email.replace('@gmail.com',''),
            email,
            password: hash,
            confirmationCode: token,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            type: 'FREE',
            active: false,
        }
        await userModel.add(newUser);
        nodemailer.sendConfirmationEmail(newUser.name, newUser.email, newUser.confirmationCode);

        //Tạo ra project inbox mặc định ban đầu 
        const inboxProject = {
            ...defaultProject,
            id: uuidv4(),
            ownerId: newUser.id,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
        }

        //Thêm dữ liệu vào bảng dự án và tham gia dự án
        await projectModel.add(inboxProject);
        await collaborativeModel.add({
            collaboratorId: newUser.id, 
            projectId: inboxProject.id,
            joinedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB')
        });

        //Thêm section mặc định của project tren
        await sectionModel.add({
            ...defaultSection,
            createdUser: newUser.id,
            createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            id: inboxProject.id,
            projectId: inboxProject.id,
        })

        //Trả về 1 access token xác nhận người dùng đã đăng nhập có thể dùng để truy xuất ra user id
        const accessToken = jwt.sign({userId: newUser.id}, process.env.ACCESS_TOKEN_SECRET);
        res.json({success: true, message: 'User created successfully', accessToken});
    }
    catch (err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: 'Server error'});
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password)
        return res
            .status(400)
            .json({success: false, message: 'Missing email or password'});

    try {
        //Kiểm tra email có tồn tại trong csdl
        const user = await userModel.findByEmail(email);
        if(!user) {
            return res
                .status(400)
                .json({success: false, message: 'Email or password is invalid'});
        }
        //Kiểm tra password nhập vào hash có trùng với password trong csdl
        const validPassword = await bcrypt.compareSync(password, user.password);
        if(!validPassword) 
            return res
                .status(400)
                .json({success: false, message: 'Email or password is invalid'});
        
        //Trả về 1 access token xác nhận người dùng đã đăng nhập có thể dùng để truy xuất ra user id
        const accessToken = jwt.sign({userId: user.id}, process.env.ACCESS_TOKEN_SECRET);
        res.json({success: true, message: 'User login successfully', accessToken});
    }
    catch(err) {
        console.log(err.stack);
        res.json({success: false, message: err.message});
    }
        
}

exports.verifyUser = async (req, res) => {
    const {confirmationCode} = req.params;

    try {
        const user = await userModel.find({confirmationCode});

        console.log(confirmationCode);
        if(!user) 
            return res
                .status(401)
                .json({success: false, message: 'User not found'});
        
        await userModel.update({...user[0], active: true});
        res.redirect(`${process.env.URL_FRONT_END}/app`);
    }
    catch(err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: err.message});
    }
}

exports.loginWithGoogle = async (req, res) => {
    if(!req.user) 
        return res.status(401)
            .json({success: false, message: 'Login with google failed'});

    const email = req.user.emails[0].value;
    try{
        //Tìm ra thử email đã được đăng ký chưa
        const user= await userModel.findByEmail(email);

        console.log(req.user);
        //  Nếu chưa có lưu user vào cơ sở dữ liệu
        if(!user) {
            //Lưu newUser vào csdl
            const newUser = {
                id: req.user.id,
                name: req.user.displayName,
                email,
                type: 'FREE',
                createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
                active: true,
            }

            await userModel.add(newUser);
            
            //Tạo ra project inbox mặc định ban đầu 
            const inboxProject = {
                ...defaultProject, 
                id: uuidv4(),
                ownerId: newUser.id,
                createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
            }

            //Thêm dữ liệu vào bảng dự án và tham gia dự án
            await projectModel.add(inboxProject);
            await collaborativeModel.add({
                collaboratorId: newUser.id, 
                projectId: inboxProject.id,
                joinedDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB')
            });

            //Thêm section mặc định của project tren
            await sectionModel.add({
                ...defaultSection,
                createdUser: newUser.id,
                createdDate: new Date().toISOString().slice(0, 10)+" "+new Date().toLocaleTimeString('en-GB'),
                id: inboxProject.id,
                projectId: inboxProject.id,
            })
        }

        //Trả về 1 access token xác nhận người dùng đã đăng nhập có thể dùng để truy xuất ra user id
        const accessToken = jwt.sign({userId: req.user.id}, process.env.ACCESS_TOKEN_SECRET);
        req.session = null;
        req.logout();
        res.redirect(`${process.env.URL_FRONT_END}?acessToken=${accessToken}`);
    }
    catch (err) {
        console.log(err.stack);
        res.status(500)
            .json({success: false, message: 'Server error'});
    }
}