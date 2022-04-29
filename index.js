import express from "express";
import workingHours from "./data/workingHours.js";
import menuItems from "./data/menuItem.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { name: `Welcome to What's Fare is Fair!` });
});

app.get("/menu", (req, res) => {
  res.render("menu", { menuItems });
});

app.get("/hours", (req, res) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  res.render("hours", { workingHours, days });
});

app.listen(port, () => {
  console.log(`Local server is listening on port: ${port}`);
});
