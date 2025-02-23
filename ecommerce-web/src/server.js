// src/server.js
import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine.js";
import userRouter from "./routers/users.js";

const app = express();

// Cấu hình body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình view engine
configViewEngine(app);

// Gắn router
app.use("/users", userRouter);

// Khởi động server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
