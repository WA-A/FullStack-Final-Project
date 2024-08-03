import connectDB from '../DB/ConnectDB.js';
import AuthRouter from './modules/auth/auth.router.js';
import UserStudentRouter from './modules/StudentUser/StudentUser.router.js';
import UserAdminRouter from './modules/AdminUser/AdminUser.router.js';
import DiscussionDates from "./modules/DiscussionDates/DiscussionDates.router.js"
import cors from 'cors';


const Appinit = (app,express)=>{
    app.use(express.json());
    app.use(cors())
    connectDB();
    
    app.use('/userstudent',UserStudentRouter);
    app.use('/useradmin',UserAdminRouter);
    app.use('/auth',AuthRouter);
    app.use('/discussiondates',DiscussionDates);
    app.use('*',(req,res)=>{
        return res.status(404).json({message:"Page not Found"});
    });

    app.use( (err,req,res,next)=>{ // global error is 4 parameter than middelware is 3 parameter
     res.json({message:err.message});
    });
 
}
export default Appinit ;