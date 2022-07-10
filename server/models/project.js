const db = require('../db');
const config = require('../config/config');

const {TBL_PROJECT} = config.table;

module.exports = {
    all: () => db.load(`SELECT * FROM ${TBL_PROJECT}`),
    findById:async (id) => {
        const rows = await db.load(`SELECT * FROM ${TBL_PROJECT} WHERE id = '${id}'`);
        return rows[0];
    },
    find: (condition) => db.find(TBL_PROJECT, condition),

    add: (entity) => db.add(TBL_PROJECT, entity),
    update: (entity) => {
        const condition = {
            id: entity.id
        }
        delete entity.id;
        db.update(TBL_PROJECT, entity, condition);
    },
    delete: (condition) => db.delete(TBL_PROJECT, condition),
    count: async (ownerId) => {
        const rows = await db.load(`SELECT * FROM ${TBL_PROJECT} WHERE ownerId = '${ownerId}'`);
        return rows.length;
    },
    max: async (ownerId) => {
        const rows = await db.load(`SELECT MAX(ordinalNum) as max FROM ${TBL_PROJECT} WHERE ownerId = '${ownerId}'`);
        return rows[0].max;
    }
}