// standard configs im using to start and set my routes
import express, { json } from "express";
import StudentRouter from "./router/StudentRouter.js";
const app = express();
const port = 5000;
app.use(express.json());
app.use(StudentRouter);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});