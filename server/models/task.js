const db = require('../db');
const config = require('../config/config');
const {TBL_TASK, TBL_USER, TBL_SECTION, TBL_PROJECT} = config.table;
module.exports = {
    all: () => db.load(`select * from ${TBL_TASK}`),
    findById: async (id) => {
        const rows = await db.find(TBL_TASK, id);
        return rows[0];
    },
    findBySectionId: (sectionId) => {
        return db.load(
            `SELECT ${TBL_TASK}.*, ${TBL_USER}.name AS assigneeName, ${TBL_USER}.email AS assigneeGmail
            FROM ${TBL_TASK} 
            LEFT JOIN ${TBL_USER} ON ${TBL_TASK}.assignee = ${TBL_USER}.id
            WHERE parentTask IS NULL AND sectionId = '${sectionId}' 
            ORDER BY ordinalNum ASC`);
    },
    find: (condition) => db.find(TBL_TASK, condition),

    add: (entity) => db.add(TBL_TASK, entity),
    update: (entity) => {
        const condition = {
            id: entity.id
        }
        delete entity.id;
        db.update(TBL_TASK, entity, condition);
    },
    delete: (condition) => db.delete(TBL_TASK, condition),

    //Desc: Lấy các công việc của 1 dự án 
    //Input: Mảng các section truyền vào
    fetchTasksOfProject: async (listSectionId) => {
        if(listSectionId.length === 0) return [];
        listSectionId = listSectionId.reduce((accumulator, currentValue) => {
            if(accumulator.length>0) accumulator += ',';
            return accumulator + `'${currentValue}'`;
        }, '');

        return db.load(
            `SELECT id, content, priority, type, dueDate, assignee, sectionId, ordinalNum
            FROM ${TBL_TASK}
            WHERE parentTask IS NULL AND sectionId IN (${listSectionId})
            ORDER BY ordinalNum ASC`
        );
    },

    //Desc: Lấy các công việc tới hạn của 1 dự án (dành cho today default project)  
    //Input: Mảng các section truyền vào 
    fetchTasksOfDefaultProject: (listSectionId) => {
        if(listSectionId.length === 0) return [];
        listSectionId = listSectionId.reduce((accumulator, currentValue) => {
            if(accumulator.length>0) accumulator += ',';
            return accumulator + `'${currentValue}'`;
        }, '');

        return db.load(
            `SELECT ${TBL_TASK}.id, ${TBL_TASK}.content, 
            ${TBL_TASK}.priority, ${TBL_TASK}.type, ${TBL_TASK}.dueDate, ${TBL_TASK}.assignee, ${TBL_TASK}.sectionId,
            ${TBL_SECTION}.name AS sectionName, ${TBL_PROJECT}.name AS projectName
            FROM ${TBL_TASK} 
            LEFT JOIN ${TBL_SECTION} ON ${TBL_SECTION}.id= ${TBL_TASK}.sectionId
            LEFT JOIN ${TBL_PROJECT} ON ${TBL_PROJECT}.id= ${TBL_SECTION}.projectId
            WHERE sectionId IN (${listSectionId}) AND dueDate IS NOT NULL`
        );
    },

    //Desc: Đếm các công việc chưa hoàn thành của 1 dự án 
    //Input: Mảng các section truyền vào
    countIncompletedTasks:async (listSectionId) => {
        if(listSectionId.length === 0) return 0;
        listSectionId = listSectionId.reduce((accumulator, currentValue) => {
            if(accumulator.length>0) accumulator += ',';
            return accumulator + `'${currentValue}'`;
        }, '');
        const rows = await db.load( 
        `SELECT COUNT(id) as count
        FROM ${TBL_TASK}
        WHERE sectionId IN (${listSectionId}) AND type='INCOMPLETED'`);
        return rows[0].count;
    },

    //Desc: Đếm các công việc chưa hoàn thành của 1 section
    countTasks: async(sectionId) => {
        const rows = await db.load( 
            `SELECT COUNT(id) as count 
            FROM ${TBL_TASK}
            WHERE sectionId='${sectionId}'`);
            
        return rows[0].count;
    },

    //Desc: Tìm ra công việc có số thự tự lớn nhất của một section
    maxOrdinalNum: async(sectionId) => {
        const rows = await db.load( 
            `SELECT MAX(ordinalNum) AS max
            FROM ${TBL_TASK}
            WHERE sectionId='${sectionId}'`);
            
        return rows[0].max;
    },

    //Desc: Đếm các công việc con của một công việc 
    countSubTasks: async(taskId) => {
        const rows = await db.load(
            `SELECT COUNT(id) AS count
            FROM ${TBL_TASK}
            WHERE parentTask = '${taskId}'`
        );

        return rows[0].count;
    }
}