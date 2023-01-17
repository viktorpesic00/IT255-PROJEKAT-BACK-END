import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router } from "./routes/routes.js";

import bodyParser from "body-parser";
import multer from "multer";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2000;
const upload = multer();

// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

//app.use();

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});
