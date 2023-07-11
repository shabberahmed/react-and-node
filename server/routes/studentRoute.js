import { Router} from "express";
import { deleteStudent, editId, editStudent, getStudents, postStudent } from "../contollers/studentContoller.js";
const route=Router()

route.get("/students",getStudents)
route.post("/students",postStudent)
route.delete("/students/:id",deleteStudent)
route.get("/students/:id",editId)
route.put("/students/:id",editStudent)

export default route