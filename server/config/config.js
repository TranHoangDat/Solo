require('dotenv').config();
 
module.exports = {
    mysql: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        port: process.env.DB_PORT,
        connectionLimit : 200,
        timezone: '+7:00',  
    },
    table: {
        TBL_PROJECT: 'project',
        TBL_COLLABORATIVE: 'collaborative',
        TBL_USER: 'user',
        TBL_SECTION: 'section',
        TBL_TASK: 'task',
        TBL_SHARING: 'sharing',
        TBL_COMMENT: 'comment',
        TBL_ACTIVITY: 'activity',
        TBL_ACTIVITY_TYPE: 'activityType',
    },
    gmail: {
        secret: process.env.GMAIL_SECRET,
        user: process.env.GMAIL_ACCOUNT,
        password: process.env.GMAIL_PASS
    },
    defaultProject: {
        name: 'Inbox',
        color: 'charcoal',
        view: 'LIST',
        type: 'DEFAULT',
        ordinalNum: 0,
        isFavorite: true,
    },
    defaultSection: {
        name: 'No-Section',
        ordinalNum: 0,
        type: 'NO_SECTION'
    }
}