import DiscussionDatesModel from "../../Model/DiscussionDates.Model.js";


export const AddDiscussionDates = async (req,res)=>{
 const {Student1Name,Student2Name,Day,Date,Place,ProjectName,ProjectType}=req.body;

 const DiscussionDates = await DiscussionDatesModel.create({Student1Name,Student2Name,Day,Date,Place,ProjectName,ProjectType});

 return res.status(200).json({message:"success Add",DiscussionDates});
}


export const GetDiscussionDates = async (req,res)=>{
    const ProjectName = req.body
   
    const DiscussionDates = await DiscussionDatesModel.findOne({ProjectName});
   
    return res.status(200).json({message:"success Get",DiscussionDates});
   }


   export const UpdateDiscussionDates = async (req,res)=>{
    const {Day,Date,Place} = req.body;
     const DiscussionDates = await DiscussionDatesModel.findOneAndUpdate({Day,Date,Place});
     return res.status(200).json({message:"success Update",DiscussionDates});
}

export const DeleteDiscussionDates = async (req,res)=>{
     const DiscussionDates = await DiscussionDatesModel.findByIdAndUpdate(req.params.id);

     if(!DiscussionDates){
        return res.status(404).json({message:"DiscussionDates not found"});
    
    }
     return res.status(200).json({message:"success Delete"});
}


