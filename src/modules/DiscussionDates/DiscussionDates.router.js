import { Router } from "express";
const router = Router();
import * as DiscussionDatesController from './DiscussionDates.Controller.js'
import { auth } from "../../MiddleWare/auth.js";
import { EndPoints } from "./DiscussionDates.Role.js";

router.post("/adddiscussiondates",auth(EndPoints.CreateDiscussionDates),DiscussionDatesController.AddDiscussionDates);
router.patch("/updatediscussiondates",auth(EndPoints.CreateDiscussionDates),DiscussionDatesController.UpdateDiscussionDates);
router.get("getdiscussiondates",auth(EndPoints.CreateDiscussionDates),DiscussionDatesController.GetDiscussionDates);
router.delete("/deletediscussiondates/:id",auth(EndPoints.CreateDiscussionDates),DiscussionDatesController.DeleteDiscussionDates);



export default router