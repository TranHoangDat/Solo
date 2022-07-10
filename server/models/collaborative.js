const db = require('../db');
const config = require('../config/config');
const {TBL_COLLABORATIVE, TBL_PROJECT, TBL_USER} = config.table;

module.exports = {
    all: () => db.load(`SELECT * FROM ${TBL_COLLABORATIVE}`),
    findById: async (id) => {
        const rows = await db.find(TBL_COLLABORATIVE, id);
        return rows[0];
    },
    find: (condition) => db.find(TBL_COLLABORATIVE, condition),
    
    add: (entity) => db.add(TBL_COLLABORATIVE, entity),
    update: (entity) => {
        const condition = {
            id: entity.id
        }
        delete entity.id;
        db.update(TBL_COLLABORATIVE, entity, condition);
    },
    delete: (condition) => db.delete(TBL_COLLABORATIVE, condition),
    countCollaborators: async (projectId) => {
        const rows = await db.load(
            `SELECT COUNT(collaboratorId) as count
            FROM ${TBL_COLLABORATIVE} 
            WHERE projectId = '${projectId}'`);
        return rows[0].count;
    },

    //Desc: Lấy chi tiết các người dùng tham gia vào 1 dự án
    getCollaborators: (projectId) => {
        const whereCondition = `projectId= '${projectId}'`;
        const joinCondition = `${TBL_COLLABORATIVE}.collaboratorId = ${TBL_USER}.id`;
        return db.load(
            `SELECT ${TBL_USER}.id, ${TBL_USER}.name, ${TBL_USER}.email, ${TBL_USER}.avatar, ${TBL_COLLABORATIVE}.joinedDate
            FROM ${TBL_COLLABORATIVE}
            LEFT JOIN ${TBL_USER} ON ${joinCondition}
            WHERE ${whereCondition}
            ORDER BY joinedDate ASC`
        );
    },
    //Desc: Lấy chi tiết danh sách các project của 1 user 
    joinWithProject: (collaboratorId) => {
        const whereCondition = `collaboratorId = '${collaboratorId}'`;
        const joinCondition = `${TBL_COLLABORATIVE}.projectId = ${TBL_PROJECT}.id`;
        return db.load(`SELECT ${TBL_PROJECT}.* 
                        FROM ${TBL_COLLABORATIVE} 
                        LEFT JOIN ${TBL_PROJECT} ON ${joinCondition} 
                        WHERE ${whereCondition}
                        ORDER BY ordinalNum ASC`);
    },

}