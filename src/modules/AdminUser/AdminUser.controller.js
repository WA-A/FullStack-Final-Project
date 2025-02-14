import AdminModel from "../../Model/Admin.Model.js";

let NumberOfGroups ;

export const AddSupervisor = async (req,res)=>{
    const {SupervisorName,UniversityID,Major,PhoneNumber} = req.body;
     const supervisor = await AdminModel.create({SupervisorName,UniversityID,Major,PhoneNumber});
     
     if(NumberOfGroups>6){
          return res.status(401).json({message:"Can't added "});

     }
     return res.status(200).json({message:"success Add",supervisor});

     
}


export const UpdateSupervisor = async (req,res)=>{
    const {Major,PhoneNumber} = req.body;
     const supervisor = await AdminModel.findOneAndUpdate({Major,PhoneNumber});
     return res.status(200).json({message:"success Update",supervisor});
}

export const DeleteSupervisor = async (req,res)=>{
     const supervisor = await AdminModel.findByIdAndUpdate(req.params.id);

     if(!supervisor){
        return res.status(404).json({message:"supervisor not found"});
    
    }
     return res.status(200).json({message:"success Delete"});
}

export const GetSupervisor = async (req,res)=>{
     const {SupervisorName} = req.body;
      const student = await AdminModel.findOne({SupervisorName});
      return res.status(200).json({message:"success get",student});
 }


