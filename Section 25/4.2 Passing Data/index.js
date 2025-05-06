import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var name, surname;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    name = req.body["fName"];
    surname = req.body["lName"];
    res.render("index.ejs", {name: name, surname: surname});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
