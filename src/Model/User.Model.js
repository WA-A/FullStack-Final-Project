import mongoose, { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    UserName:{
      type: String,
       required:true,
       min:4,
       max:20
    },
    Email:{
        type:String,
        unique:true
     },
     Password:{
        type:String,
        required:true
     },
     PhoneNumber:{
      type:String
     },
     ProjectType:{
    type:String,
    enum:['Software','Hardware'],
    },
     ConfirmEmail:{
        type:Boolean,
        default:false
     },
     gender:{
        type:String,
        enum:['Male','Female'],
     },
     Supervisor:{
      type:String
     },
     Status:{
        type:String,
        default:'Active',
        enum:['Active','NotActive'],
     },
     Role:{
        type:String,
        default:'User',
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
 

const UserModel = model('User',UserSchema); 
export default UserModel;