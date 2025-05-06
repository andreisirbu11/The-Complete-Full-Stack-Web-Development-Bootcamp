import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  database: "secrets",
  host: "localhost",
  password: "1234",
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function verifyUser(email, password) {
  let verified = false;
  try {
    const result = await db.query("SELECT password FROM users WHERE email = $1;", [email]);
    if(result.rows[0].password === password) {
      verified = true;
    }
  }
  catch (err) {
    console.log("Error: ", err.message);
  }
  return verified;
}

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
    res.render("secrets.ejs");
  }
  catch(err) {
    console.log("Error: ", err.message);
    res.status(500).send("Username cannot be registered.");
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    let verified = await verifyUser(email, password);
    if(verified === true) {
      res.render("secrets.ejs");
    }
    else {
      res.send("Incorrect username or password.");
    }
  }
  catch (err) {
    console.log("Error: ", err.message);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
