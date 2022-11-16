const mysqlConnection = require("./igspots");

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