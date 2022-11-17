const express = require('express');
const http = require('http');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const {response} = require("express");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*'
}));

app.get('/users', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM users;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

app.get('/spots', (req, res) => {
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

app.get('/spot_img', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM spot_img;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})


app.get('/user_rating', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM user_rating;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})


app.get('/rating', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM rating;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})


app.get('/images', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM images;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})




