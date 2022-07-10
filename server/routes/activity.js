const express = require('express');
const router = express.Router();

const activityModel = require('../models/activity');
const collaborativeModel = require('../models/collaborative');
//Route: get /activity?projectId=
//Desc: Lấy các danh sách hoạt động của dự án
router.get('/',async (req, res) => {
    const userId = req.userId;
    const {projectId} = req.query;

    try {
        const authorized = await collaborativeModel.findById({projectId, collaboratorId: userId});
        if(!authorized)
            return res.status(401)
                .json({success: false, message: 'User is not authorized to see activity'});
        
        const activities = await activityModel.findByProject(projectId);
        res.json({success: true, message: 'Get activity of project successfully', activities});
    }
    catch(err) {
        console.log(err.message);
        res.status(500)
            .json({success:false, message: err.message});
    }
})
module.exports = router;