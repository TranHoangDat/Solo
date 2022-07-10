const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task');

//Route: get /task?projectId=
//Desc: Lấy danh sách các task của 1 project nào đó 
router.get('/', taskController.getTasksOfProject);

//Route: get /task/task-of-section?sectionId=
//Desc: Lấy danh sách các task của 1 section nào đó 
router.get('/task-of-section', taskController.getTasksOfSection);

//Route: post /task?sectionId=
//Desc: Thêm 1 task của 1 section nào đó 
router.post('/', taskController.addTask);

//Route: post /task/duplicate?taskId=
//Desc: Sao chép 1 task 
router.post('/duplicate', taskController.duplicateTask);

//Route: put /task?sectionId
//Desc: chỉnh sửa 1 task
router.put('/:taskId', taskController.updateTask);

//Route: del /task?sectionId
//Desc: Xóa 1 task khỏi section
router.delete('/:taskId', taskController.deleteTask);


module.exports = router;