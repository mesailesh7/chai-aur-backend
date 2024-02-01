// require("dotenv").config();

import dotenv from "dotenv";

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import express from "express";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("error:", error);
      throw error;
    });
  })

  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });

/*
import express from "express";
const app = express();

// iifi function which will execute automatically
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // listeners from express
    app.on("error", (error) => {
      console.log("Err: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error:", error);
  }
})();
*/
