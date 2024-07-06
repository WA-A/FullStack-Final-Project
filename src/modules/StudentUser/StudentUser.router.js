import { Router } from "express";
const router = Router();
import * as UserStudentController from './StudentUser.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./StudentUser.Role.js";

router.post("/addgraduationproject",auth(EndPoints.CreateStudent),UserStudentController.AddGraduationProject);
router.patch("/updategraduationproject",auth(EndPoints.CreateStudent),UserStudentController.UpdateGraduationProject);
router.delete("/deletegraduationproject/:id",auth(EndPoints.CreateStudent),UserStudentController.DeleteGraduationProject);



export default router