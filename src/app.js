import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";
//

// routes decleration
// app.get used to work because at the same file there was routes and controller
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users
//

export { app };
