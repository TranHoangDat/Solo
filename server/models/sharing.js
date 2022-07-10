const db = require('../db');
const config = require('../config/config');

const {TBL_SHARING, TBL_PROJECT, TBL_USER} = config.table;

module.exports = {
    findById: async (id) => {
        const rows = await db.find(TBL_SHARING, id);
        return rows[0];
    },
    findByProjectId: (projectId) => {
        const whereCondition = `projectId='${projectId}'`;
        const joinCondition = `${TBL_USER}.id = ${TBL_SHARING}.invitedUser`;
        return db.load(`
            SELECT ${TBL_USER}.id, ${TBL_USER}.name, ${TBL_USER}.email, 
            ${TBL_USER}.avatar, ${TBL_SHARING}.projectId, ${TBL_SHARING}.sharedDate
            FROM ${TBL_SHARING}
            LEFT JOIN ${TBL_USER} ON ${joinCondition}
            WHERE ${whereCondition}
        `);
    },
    getInvitation: (invitedUser) => {
        return db.load(`
            SELECT ${TBL_PROJECT}.id as projectId, ${TBL_PROJECT}.name as projectName, 
            ${TBL_USER}.id as sharingUserId, ${TBL_USER}.email as sharingUserEmail, 
            ${TBL_SHARING}.invitedUser as invitedUserId, ${TBL_SHARING}.sharedDate
            FROM ${TBL_SHARING}
            LEFT JOIN ${TBL_PROJECT} ON ${TBL_PROJECT}.id = ${TBL_SHARING}.projectId
            LEFT JOIN ${TBL_USER} ON ${TBL_USER}.id = ${TBL_SHARING}.sharedUser
            WHERE invitedUser= '${invitedUser}'
            ORDER BY sharedDate DESC
        `)
    },
    getInvitedUser: async (projectId, invitedUser) => {
        const whereCondition = `projectId='${projectId}' AND invitedUser='${invitedUser}'`;
        const joinCondition = `${TBL_USER}.id = ${TBL_SHARING}.invitedUser`;

        const rows = await db.load(`
            SELECT ${TBL_USER}.id, ${TBL_USER}.name, ${TBL_USER}.email, 
            ${TBL_USER}.avatar, ${TBL_SHARING}.projectId, ${TBL_SHARING}.sharedDate
            FROM ${TBL_SHARING}
            LEFT JOIN ${TBL_USER} ON ${joinCondition}
            WHERE ${whereCondition}
        `);
        return rows[0];
    },

    add: (entity) => db.add(TBL_SHARING, entity),
    delete: (condition) => db.delete(TBL_SHARING, condition),
};