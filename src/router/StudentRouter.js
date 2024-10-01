import { Router } from "express";
const router = Router();
import StudentController from "../controller/StudentController.js";
router.post("/students", StudentController.create); // create a student
router.get("/students", StudentController.read); // read all students created previously
router.get("/students/:id", StudentController.readById); // read a single student based on their id
router.put("/students/:id", StudentController.update); // update a student information
router.delete("/students/:id", StudentController.delete); // delete a student

export default router; // exporting my router object to use in "index.js"