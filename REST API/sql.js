require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error)=>{
    if (error) throw error;
    console.log(`Successfully Connected With database : ${process.env.DATABASE}` );
});

module.exports = connection;