import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "1234",
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function fetchItems() {
  let items = [];
  try {
    const result = await db.query("SELECT * FROM items;");
    result.rows.forEach(row => {
      items.push(row);
    });
  } catch (err) {
    console.error("Error fetching items:", err);
  }
  return items;
}

app.get("/", async (req, res) => {
  const items = await fetchItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    const result = await db.query("INSERT INTO items (title) VALUES ($1) RETURNING id;", [item]);
    console.log("Added item with id = ", result.rows[0].id);
    res.redirect("/");
  }
  catch (err) {
    console.log("Error: ", err.message);
    res.status(500).send("Database error: cannot add item.");
  }
});

app.post("/edit", async (req, res) => {
  const updatedItemTitle = req.body.updatedItemTitle;
  const updatedItemId = req.body.updatedItemId;
  try {
    const result = await db.query("UPDATE items SET title = $1 WHERE id = $2;", [updatedItemTitle, updatedItemId]);
    console.log("Updated item with id = ", updatedItemId);
    res.redirect("/");
  }
  catch (err) {
    console.log("Error: ", err.message);
    res.status(500).send("Database error: cannot update item.");
  }
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;
  try {
    const result = await db.query("DELETE FROM items WHERE id = $1;", [itemId]);
    console.log("Deleted item with id = ", itemId);
    res.redirect("/");
  }
  catch (err) {
    console.log("Error: ", err.message);
    res.status(500).send("Database error: cannot delete item.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
