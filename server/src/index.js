import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors"; //use to excess backend api

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
