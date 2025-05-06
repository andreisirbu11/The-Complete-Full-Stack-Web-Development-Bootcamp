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
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = null;

async function fetchUsers() {
  const result = await db.query("SELECT * FROM users;");
  let users = [];
  result.rows.forEach((user) => {
    users.push(user);
  })
  return users;
}

async function checkVisisted(userId) {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1;", [userId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function addUser(name, color) {
  try {
    const result = await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING id;", [name, color]);
    currentUserId = result.rows[0].id;
  }
  catch (err) {
    console.log("Error: ", err.message);
  }
}

async function fetchColor(userId) {
  if(userId !== null) {
    const result = await db.query("SELECT color FROM users WHERE id = $1;", [userId]);
    return result.rows[0].color;
  }
  else return "teal";
}

app.get("/", async (req, res) => {
  const users = await fetchUsers();
  const countries = await checkVisisted(currentUserId);
  const color = await fetchColor(currentUserId);
  console.log(countries);
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: color,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  
  if(currentUserId === null) {
    res.status(500).send("You haven't selected a family member yet. If no family member exists, add a new one.");
  }
  else {
    try {
      const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1;", [input]);
      const data = result.rows[0];
      const countryCode = data.country_code;

      try {
        await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)", [countryCode, currentUserId]);
        res.redirect("/");
      } catch (err) {
        res.status(500).send("Country already visited");
        console.log(err);
      }
    } catch (err) {
      res.status(500).send("No such country exists.");
      console.log(err);
    }
  }
});

app.post("/user", async (req, res) => {
  const input = req.body;
  if(input.user) {
    currentUserId = req.body.user;
    res.redirect("/");
  }
  else if(input.add) {
    res.render("new.ejs");
  }
  else {
    res.sendStatus(404);
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const input = req.body;
  try {
    await addUser(input.name, input.color);
    res.redirect("/");
  }
  catch (err) {
    console.log("Database error: ", err.stack);
    res.status(500).send("Database error: ", err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
