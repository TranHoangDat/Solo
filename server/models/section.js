const db = require('../db');
const config = require('../config/config');
const {TBL_SECTION} = config.table;

module.exports = {
    all: () => db.load(`select * from ${TBL_SECTION}`),
    findById: async (id) => {
        const rows = await db.find(TBL_SECTION, id);
        return rows[0];
    },
    findByProjectId: async (projectId) => {
        const rows = await db.load(
            `SELECT * 
            FROM ${TBL_SECTION} 
            WHERE projectId='${projectId}'
            ORDER BY ordinalNum ASC`);
        return rows;
    },
    find: (condition) => db.find(TBL_SECTION, condition),

    add: (entity) => db.add(TBL_SECTION, entity),
    update: (entity) => {
        const condition = {
            id: entity.id
        }
        delete entity.id;
        db.update(TBL_SECTION, entity, condition);
    },
    delete: (condition) => db.delete(TBL_SECTION, condition),
    max: async (projectId) => {
        const rows = await db.load(`SELECT MAX(ordinalNum) as max FROM ${TBL_SECTION} WHERE projectId = '${projectId}'`);
        return rows[0].max;
    }
}