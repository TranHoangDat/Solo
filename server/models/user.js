const db = require('../db');
const config = require('../config/config');
const {TBL_USER} = config.table;

module.exports = {
    all: () => db.load(`select * from ${TBL_USER}`),
    findById: async (id) => {
        const rows = await db.find(TBL_USER, id);
        return rows[0];
    },
    findByEmail: async (email) => {
        const rows = await db.load(
            `SELECT id, name, email, avatar, password
             FROM ${TBL_USER} 
             WHERE email = '${email}'`);
        return rows[0];
    },
    find: (condition) => db.find(TBL_USER, condition),

    add: (entity) => db.add(TBL_USER, entity),
    update: (entity) => {
        const condition = {
            id: entity.id
        }
        delete entity.id;
        db.update(TBL_USER, entity, condition);
    },
    delete: (id) => {
        const condition = {
            id: id
        }
        db.delete(TBL_USER, condition);
    },
    getUsersByEmail: (email) => {
        return db.load(
            `SELECT id, name, email, avatar
             FROM ${TBL_USER} 
             WHERE email LIKE '${email}%'
             LIMIT 5`);
    }
}