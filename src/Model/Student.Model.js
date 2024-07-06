import mongoose, { Schema, model,Types } from 'mongoose';

const StudentSchema = new Schema({
   StudentId:{
      type:Types.ObjectId,
     unique:true
  },
   StudentName:{
      type: String,
       min:4,
       max:20
    },
    UniversityID:{
        type:String,
    },
     PhoneNumber:{
      type:String
     },
     ProjectType:{
    type:String,
    enum:['Software','Hardware'],
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
    },
    {
     timestamps:true,
    }  
);
 

const StudentModel = model('Student',StudentSchema); 
export default StudentModel;