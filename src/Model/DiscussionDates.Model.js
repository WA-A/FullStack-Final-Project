import mongoose, { Types,Schema, model } from 'mongoose';

const DiscussionDatesSchema = new Schema({
    Student1Name:{
      type: String,
       min:4,
       max:20
    },
    Student2Name:{
        type: String,
         min:4,
         max:20
      },
      ProjectName:{
        type: String,
         min:4,
         max:20
      },
     Day:{
      type:String,
     },
     Date:{
      type:String
     },
     Place:{
        type:String,
     },
     ProjectType:{
        type:String,
        enum:['Software','Hardware'],
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
 

const DiscussionDatesModel = model('DiscussionDates',DiscussionDatesSchema); 
export default DiscussionDatesModel;