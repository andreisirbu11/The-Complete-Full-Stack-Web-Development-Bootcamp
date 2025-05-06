import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1234",
  port: 5432
}); 

let countries, total;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  db.query("SELECT country_code FROM visited_countries;", (err, result) => {
    if (err) {
      console.log("Error fetching countries:", err.stack);
      res.status(500).send("Database error");
    } else {
      countries = result.rows.map(row => row.country_code).join(",");
      total = result.rowCount;
      res.render("index.ejs", { countries, total });
    }
  });
});

app.post("/add", (req, res) => {
  db.query("SELECT country_code FROM countries WHERE country_name LIKE '%' || $1 || '%';", [req.body.country], (err, result) => {
    if(err) {
      console.log("Error fetching countries:", err.stack);
      res.status(500).send("Database error");
    }
    else {
      if(result.rowCount !== 0) {
        let countryCode = result.rows[0].country_code;
        db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode], (err, result) => {
          if(err) {
            console.log("Error fetching countries:", err.stack);
            res.render("index.ejs", {countries, total, error: "Country already visited."});
          }
          else {
            res.redirect("/");
          }
        });
      }
      else {
        res.render("index.ejs", {countries, total, error: "Country does not exist, try again."});
      }
    }
  });
});

// Only close the db connection when the app is stopping
process.on("SIGINT", () => {
  db.end(() => {
    console.log("Database connection closed");
    process.exit(0);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
