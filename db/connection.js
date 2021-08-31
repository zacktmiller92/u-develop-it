const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'zack',
        // Your MySQL password
        password: 'zack',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
