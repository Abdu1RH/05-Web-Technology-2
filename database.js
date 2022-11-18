// Importing the mysql2 library
const mysql = require("mysql2");
require('dotenv').config();

console.log("******************** STARTING HERE")
console.log(process.env.HOST)
console.log(process.env.PORT)
console.log(process.env.DATABASE)
console.log(process.env.MYSQL_USER)


// 1. Creating the connection
const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
    ssl: {
        "rejectUnauthorized": this.host === "localhost"
    }
});

// 2. Connecting to the database. Handling success and error cases
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log(err);
        console.log("Connection Failed");
    }
});

module.exports = mysqlConnection;

