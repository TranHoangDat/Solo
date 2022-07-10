const express = require('express');
const router = express.Router();
const passport = require('passport');

const verifyToken = require('../middleware/auth');
const authController = require('../controllers/auth');

//Route: get /api/auth/
//Desc: Lấy thông tin người dùng
router.get('/', verifyToken, authController.getUser);

//Route: post /api/auth/register
//Desc: Đăng ký tài khoản
router.post('/register',authController.register);

//Route: post /api/auth/login
//Desc: Đăng nhập
router.post('/login', authController.login);

//Route: post /api/auth/confirm/:confirmationCode
//Desc: Xác thực gmail người dùng
router.get('/confirm/:confirmationCode', authController.verifyUser);


//Route: get /api/auth/google
//Desc: Load lên màn hình xác thức của google
router.get('/google',
    passport.authenticate('google', 
    { 
        scope: ['profile', 'email'],
        prompt : "select_account",
    }));

//Route: get /api/auth/google/callback
//Desc: Sau khi xác thực nhan ve ham callback
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/api/auth/google/failed' }),
    (req, res) => {
        res.redirect('/api/auth/google/done');
    });

//Route: get /api/auth/google/done
//Desc: Sau khi xác thực nhan ve ham callback
router.get('/google/done', authController.loginWithGoogle);


module.exports = router;