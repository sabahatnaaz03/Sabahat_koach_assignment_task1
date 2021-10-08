const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'koach_assignment',
    password: 'Sabahat@123'
});

module.exports = pool.promise();