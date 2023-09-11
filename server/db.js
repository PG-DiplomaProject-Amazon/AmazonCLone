const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 20,
    user: "root",
    password: "password",
    host: "localhost",
    port: 3306,
    database: "amazon_db",
    timezone: 'utc'
})



module.exports = { pool }
