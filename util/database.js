const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'user-data',
    password: '705043'
});

module.exports = pool.promise();