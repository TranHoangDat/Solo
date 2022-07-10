const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

//Route: get /user?email=
//Desc: Lấy danh sách một số người dùng thông qua tên 
router.get('/user', userController.getUserByEmail);

//Route: get /acccount
//Desc: Lấy thông tin chi tiết về một người dùng
router.put('/', userController.getProfile);

//Route: put /acccount
//Desc: Gíup cập nhật thông tin tài khoản người dùng
router.put('/', userController.updateProfile);


//Route: put /acccount/password
//Desc: Gíup cập nhật mật khẩu tài khoản người dùng
router.put('/password', userController.updatePassword);

module.exports = router;