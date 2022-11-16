// Importing the mysql2 library
const mysql = require("mysql2");
require('dotenv').config();

// 1. Creating the connection
const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
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

// 3. Sending a query to the database
mysqlConnection.query(
    "SELECT * FROM igspots.spots;",
    (err, results, fields) => {
        if (!err) {
            console.log(results);
        } else {
            console.log(err);
        }
    }
);

module.exports = mysqlConnection;
