import express from "express";
import ejs from "ejs";
import {dirname, join} from "path";
import { fileURLToPath } from "url";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(3000);
console.log("Server is listen on port 3000");

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.get("/", (req, res) => res.render("index"))
app.get("/about", (req, res) => res.render("about"))
app.get("/contact", (req, res) => res.render("contact"))