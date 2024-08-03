import { Router } from "express";
import * as UserAdminController from './AdminUser.controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./AdminUser.Role.js";


const router = Router();


router.post("/addsupervisor",auth(EndPoints.Createsupervisor),UserAdminController.AddSupervisor);
 router.patch("/updatesupervisor",auth(EndPoints.Createsupervisor),UserAdminController.UpdateSupervisor);
router.delete("/deletesupervisor/:id",auth(EndPoints.Createsupervisor),UserAdminController.DeleteSupervisor);
router.get("/getsupervisor",auth(EndPoints.Createsupervisor),UserAdminController.GetSupervisor);



export default router