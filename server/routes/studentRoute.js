import { Router} from "express";
import { getStudents, postStudent } from "../contollers/studentContoller.js";
const route=Router()

route.get("/students",getStudents)
route.post("/students",postStudent)
export default route