const express = require('express');
const router = express.Router();

const sectionController = require('../controllers/section');

//Route: get /section?projectId=
//Desc: Lấy các section thuộc project nào đó thông qua projectId
router.get('/', sectionController.getSections);

//Route: post /section?projectId=
//Desc: Thêm mới một section
router.post('/', sectionController.addSection);

//Route: post /section/duplicate?sectionId
//Desc: Sao chép 1 section
router.post('/duplicate', sectionController.duplicateSection);

//Route: put /section/:sectionId
//Desc: Cập nhật một section
router.put('/:sectionId', sectionController.updateSection);

//Route: delete /section/:sectionId
//Desc: Xóa một section
router.delete('/:sectionId', sectionController.deleteSection);

module.exports = router;