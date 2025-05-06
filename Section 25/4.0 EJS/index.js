import express from "express";

const app = express();
const port = 3000;
const date = new Date();
const day = (date.getDay() < 5 && date.getDay() >= 0) ? "a weekday" : "the weekend";
const activity = (day === "a weekday") ? "work hard" : "have fun";

app.get("/", (req, res) => {
    res.render("index.ejs", {day: day, activity: activity});
})

app.listen(port, () => {
    console.log("Listening on port 3000.");
})
