import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://www.7timer.info/bin/api.pl";

var weather;
var location;

app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
    res.render("index.ejs", {weather: weather, location: location});
});

app.post("/location", async (req, res) => {
    location = {
        lat: req.body.latitude,
        lon: req.body.longitude
    }
    try {
        let result = await axios.get(API_URL, {
            params: {
                lon: req.body.longitude,
                lat: req.body.latitude,
                product: "civil",
                output: "json"
              }
        });
        weather = result.data;
        res.sendStatus(200);
    }
    catch (err) {
        console.log(`Error: ${err.message}`);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});