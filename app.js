const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv');
const mysqlConnection = require("./igspots");
const port = 3000;

app.get('/igspots', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM spots;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

