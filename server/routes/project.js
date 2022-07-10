const express = require('express');
const router = express.Router();

const projectController = require('../controllers/project');

//Route: get /project
//Desc: Lấy về toàn bộ những project liên quan đên người dùng tương ứng
router.get('/', projectController.getProjects);

//Route: get /project/default
//Desc: Lấy về toàn bộ những project liên quan đên người dùng tương ứng
router.get('/default', projectController.getDefaultProject);

//Route: post /project
//Desc: Thêm mới một project
router.post('/', projectController.addProject);

//Route: post /project/duplicate?projectId=
//Desc: Sao chép 1 project
router.post('/duplicate', projectController.duplicateProject);

//Route: get /project/collaborator?projectId=
//Desc: Lấy danh sách các user tham gia vào dự án
router.get('/collaborator', projectController.getCollaboratorsOfProject);

//Route: delete /project/collaborator?collaboratorId= &projectId=
//Desc: Xóa thành viên ra khỏi dự án
router.delete('/collaborator', projectController.removeCollaborator);

//Route: get /project/sharing?projectId
//Desc: Lấy danh sách các user đã được mời vào dự án
router.get('/sharing', projectController.getInvitedUser);

//Route: post /project/sharing?invitedUser= &projectId=
//Desc: Mời 1 người dùng tham dự vào dự án
router.post('/sharing', projectController.inviteUser);

//Route: delete /project/sharing?invitedUser= &projectId=
//Desc: Xóa 1 người dùng đã được mời vào dự án
router.delete('/sharing', projectController.removeUser);

//Route: post /project/invite_from_project?invitedProject= &projectId=
//Desc: Mời các người dùng của 1 dự án khác tham gia vào dự án hiện tại
// router.post('/invite_from_project', projectController.inviteFromOtherProject);

//Route: get /project/invited
//Desc: Lấy danh sách các lời mời 
router.get('/invitation', projectController.getInvitations);

//Route: post /project/invitation?projectId
//Desc: chấp nhận join vào dự án
router.post('/invitation', projectController.acceptInvitation);

//Route: put /project/invitation?projectId
//Desc: Từ chối join vào 1 dự án
router.delete('/invitation', projectController.denyInvitation);

//Route: put /project/:projectId
//Desc: Chỉnh sửa 1 project với id tương ứng
router.put('/:projectId', projectController.updateProject);

//Route: delete /project/:projectId
//Desc: Xóa 1 project với id tương ứng
router.delete('/:projectId', projectController.deleteProject)



module.exports = router;