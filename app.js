const express = require('express');
const port= 3000;
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

const mysqlConnection= require("./database")

const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);


app.get('/', (req, res) => {
    res.send("Welcome to the database!")
});
app.get('/spots', (req, res) => {
    mysqlConnection.query(
        "SELECT spots.spot_id, spots.location_name, spots.address, spots.season, spot_image.img_link FROM spots INNER JOIN spot_image ON spots.spot_id = spot_image.spot_id;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})



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


app.get('/spot_image', (req, res) => {
    mysqlConnection.query(
        "SELECT * FROM spot_image;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})


app.get('/user_spot', (req, res) => {
    mysqlConnection.query(
        "SELECT user_spot.spot_id, user_spot.location_name, user_spot.user_name, user_spot.user_mail FROM user_spot INNER JOIN spot_image ON user_spot.spot_id = spot_image.spot_id;",
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})


app.get("/spots/:id",(req, res) => {
    const query = "SELECT * FROM igspot_db.spots WHERE spot_id = ?;";
    const id = req.params.id;
    mysqlConnection.query(
        query,
        [id],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }

        });
})


        app.post('/images/create', (req, res,) => {
            const img_Id = req.body.img_id
            const img_link = req.body.img_link
           console.log(img_Id,img_link)

            const query = "INSERT INTO images (img_id, img_link) VALUES (?,?);";
            mysqlConnection.query(
                query,
                [img_Id,img_link],
                (err, results, fields) => {
                    if (!err) {
                        res.json(results);
                    } else {
                        console.log(err);
                    }

                });
        });



app.listen(port, () => {
    console.log(`Server started on port at http://localhost:${port}`);
});
module.exports = app;



