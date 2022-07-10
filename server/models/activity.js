const db = require('../db');
const config = require('../config/config');

const {TBL_USER, TBL_ACTIVITY, TBL_ACTIVITY_TYPE} = config.table;

module.exports = {
    findByProject: async (projectId) => {
        
        const rows = await db.load(
        `SELECT ${TBL_ACTIVITY}.*, ${TBL_USER}.username, ${TBL_USER}.avatar, ${TBL_USER}.gmail, ${TBL_ACTIVITY_TYPE}.*
        FROM ${TBL_ACTIVITY}
        JOIN ${TBL_USER} ON ${TBL_USER}.id = ${TBL_ACTIVITY}.userId
        JOIN ${TBL_ACTIVITY_TYPE} ON ${TBL_ACTIVITY}.activityType = ${TBL_ACTIVITY_TYPE}.id
        `)

        const result = rows.map(async row => {
            const obj = await db.find(row.table, {id: row.objectId});
            const a = obj[0];
            return {...row, a};
        })
        console.log(result);
        return result;
    },

    add: (entity) => db.add(TBL_ACTIVITY, entity),
    delete: (condition) => {
        db.delete(TBL_ACTIVITY, condition);
    },

}