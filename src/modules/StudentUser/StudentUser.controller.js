import StudentModel from "../../Model/Student.Model.js";



export const AddGraduationProject = async (req,res)=>{
    const {StudentName,UniversityID,ProjectType,Supervisor,PhoneNumber} = req.body;
     const student = await StudentModel.create({StudentName,UniversityID,ProjectType,Supervisor,PhoneNumber});
     return res.status(200).json({message:"success Add",student});
}


export const UpdateGraduationProject = async (req,res)=>{
    const {ProjectType,Supervisor,PhoneNumber} = req.body;
     const student = await StudentModel.findOneAndUpdate({ProjectType,Supervisor,PhoneNumber});
     return res.status(200).json({message:"success Update",student});
}

export const DeleteGraduationProject = async (req,res)=>{
     const student = await StudentModel.findByIdAndUpdate(req.params.id);

     if(!student){
        return res.status(404).json({message:"student not found"});
    
    }
     return res.status(200).json({message:"success Delete"});
}





