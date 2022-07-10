const db = require('../db');
const config = require('../config/config');
const {TBL_COMMENT} = config.table;

module.exports = {
    all: () => db.load(`select * from ${TBL_COMMENT}`),
    findById: async (id) => {
        const rows = await db.find(TBL_COMMENT, id);
        return rows[0];
    },
    find: (condition) => db.find(TBL_COMMENT, condition),

    add: (entity) => db.add(TBL_COMMENT, entity),
    update: (entity) => {
        const condition = {
            id: entity.id
        }
        delete entity.id;
        db.update(TBL_COMMENT, entity, condition);
    },
    delete: (condition) => db.delete(TBL_COMMENT, condition),

    countCommentOfProject: async (projectId) => {
        const rows = await db.load(`
            SELECT COUNT(id) as count
            FROM ${TBL_COMMENT}
            WHERE projectId = '${projectId}'`);
        return rows[0].count;
    },
    countCommentOfTask: async (taskId) => {
        const rows = await db.load(`
            SELECT COUNT(id) as count
            FROM ${TBL_COMMENT}
            WHERE taskId = '${taskId}'`);
        return rows[0].count;
    }
}