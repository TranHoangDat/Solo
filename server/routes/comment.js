const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment');
//Route: get /comment?projectId= &taskId=
//Desc: Giúp lấy danh sách các bình luận dựa vào projectId hoặc taskId 
router.get('/', commentController.getComments);

//Route: post /comment?projectId= &taskId=
//Desc: giúp post 1 comment
router.post('/', commentController.postComment);

//Route: delete /comment/:commentId
//Desc: giúp post
router.delete('/', commentController.postComment);

module.exports = router;