import { Router } from "express";
const router = Router({caseSensitive:true});
import * as AuthController from './auth.controller.js'
import { AsyncHandler } from "../../../utls/CatchError.js";
import { Validation } from "../../MiddleWare/Validation.js";
import * as schema from './Auth.Validation.js'


router.post('/signup',Validation(schema.RegisterSchema),AuthController.SignUp);
router.post('/signin',Validation(schema.LoginSchema),AuthController.SignIn);




export default router