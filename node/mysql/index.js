const mysql = require('mysql')
const { connect } = require('superagent')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'lwx',
    typeCast: true
})

connection.connect()

connection.query('select * from user', (error, res) => {
    console.log(JSON.parse(JSON.stringify(res)))
})

connection.end()