import express from "express";
import ejs from "ejs";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routers/index.js"


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(3000);
console.log("Server is listen on port 3000");

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use(indexRouter);
