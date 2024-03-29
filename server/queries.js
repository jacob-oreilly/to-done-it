require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.DB_USER,
    host: process.DB_HOST,
    database: process.DB_NAME,
    password: process.DB_PASS,
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM task_items', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}