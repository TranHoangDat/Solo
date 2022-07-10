const mysql = require('mysql');
const config = require('./config/config');

const pool = mysql.createPool(config.mysql);
module.exports = {
    load: (sql) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, (err, results, fields) => {
                if(err) {
                    console.log(err.stack);
                    return;
                } 
            
                resolve(results);
            });
        });
    },
    find: (table, condition) => {
        return new Promise((resolve, reject) => {
            let whereCondition = '';
            for(let idx in condition) {
                whereCondition += whereCondition!=='' ? 'AND ' : '';
                whereCondition += `${idx} = '${condition[idx]}' `;
            }
            const sql = `SELECT * FROM ${table} WHERE ${whereCondition}`;

            pool.query(sql, (err, results, fields) => {
                if(err) {
                    console.log(err.stack);
                    return;
                } 
            
                resolve(results);
            });
        });
    },
    add: (table, entity) => {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO ${table} SET ?`;
            pool.query(sql, entity, (err, results, fields) => {
                if(err) {
                    console.log(err.stack);
                    return;
                } 
                resolve(results);
                
            });
        });
    },
    update: (table, entity, condition) => {
        return new Promise((resolve, reject) => {
            let whereCondition = '';
            for(let idx in condition) {
                whereCondition += whereCondition!=='' ? 'AND ' : '';
                whereCondition += `${idx} = '${condition[idx]}' `;
            }
            const sql = `UPDATE ${table} SET ? WHERE ${whereCondition}`;

            pool.query(sql, entity, (err, results, fields) => {
                if(err) {
                    console.log(err.stack);
                    return;
                } 

                resolve(results);
            });
            
        });
    },
    delete: (table, condition) => {
        return new Promise((resolve, reject) => {
            let whereCondition = '';
            for(let idx in condition) {
                whereCondition += whereCondition!=='' ? 'AND ' : '';
                whereCondition += `${idx} = '${condition[idx]}' `;
            }
            const sql = `DELETE FROM ${table} WHERE ${whereCondition}`;

            pool.query(sql, (err, results, fields) => {
                if(err) {
                    console.log(err.stack);
                    return;
                } 
                
                resolve(results);
            });
        });
    }
};