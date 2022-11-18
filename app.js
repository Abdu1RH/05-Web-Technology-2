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
console.log(mysqlConnection)


const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";
app.use(
    cors({
        origin: cors_url
    })
);


app.get('/', (req, res) => {
    res.send("Welcome to the database!")
});

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




app.get("/users/:id",(req, res) => {
    const query = "SELECT * FROM igspots.users WHERE user_id = ?;";
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
}),


        app.post('/users/create', (req, res,) => {
            const userId = req.body.user_id
            const userName = req.body.user_name
            const Email = req.body.email
            const userPassword= req.body.user_password
            console.log(userId,userName,Email,userPassword)

            const query = "INSERT INTO users (user_id, user_name, email, user_password) VALUES (?,?,?,?);";
            mysqlConnection.query(
                query,
                [userId,userName,Email,userPassword],
                (err, results, fields) => {
                    if (!err) {
                        res.json(results);
                    } else {
                        console.log(err);
                    }

                });
        });



    /*
      app.post('/spots/create', (req, res,) => {
          const spotId = req.body.spot_id
          const locationName = req.body.location_name
          const Address = req.body.address
          const Longitude= req.body.longitude
          const Latitude=req.body.latitude
          console.log(spotId,locationName,Address,Longitude,Latitude)

          const query = "INSERT INTO spots (spot_id, location_name, address, longitude,latitude) VALUES (?,?,?,?,?);";
          mysqlConnection.query(
              query,
              [spot_id, location_name, address, longitude,latitude],
              (err, results, fields) => {
                  if (!err) {
                      res.json(results);
                  } else {
                      console.log(err);
                  }

              });
      });
  */








app.listen(port, () => {
    console.log(`Server started on port at http://localhost:${port}`);
});
module.exports = app;



