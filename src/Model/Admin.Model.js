import mongoose, { Types,Schema, model } from 'mongoose';

const AdminSchema = new Schema({
    SupervisorId:{
    type:Types.ObjectId,
       unique:true
    },
    SupervisorName:{
      type: String,
       min:4,
       max:20
    },
    UniversityID:{
        type:String,
    },
     Major:{
      type:String,
     },
     PhoneNumber:{
      type:String
     },
     StudentCount:{
        type:Number,
     },
     ConfirmEmail:{
        type:Boolean,
        default:false
     },
     gender:{
        type:String,
        enum:['Male','Female'],
     },
     Status:{
        type:String,
        default:'Active',
        enum:['Active','NotActive'],
     },
     Role:{
        type:String,
        default:'Admin',
        enum:['User','Admin'],
     },
     SendCode:{
      type:String,
        default:null,
     }
    },
    {
     timestamps:true,
    }  
);
 

const AdminModel = model('Admin',AdminSchema); 
export default AdminModel;