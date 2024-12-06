import User from "../model/User.js";
import StudentReg from "../model/StudentReg.js";
import bcrypt from 'bcrypt';
import Hostel from "../model/Hostel.js";
import messages from '../constants/message.js'


const add = async (req, res) => {
    console.log("In Student controller =>");
    console.log("Data =>", req.body);
    console.log("Img Name =>", req.file);
    console.log("adminId=>", req.params.adminId);

      try {
        const {
          firstName,
          lastName,
          email,
          password,
          dateOfBirth,
          gender,
          phoneNumber,
          aadharCardId,
          state,
          city,
          address,
          studentHosId,
        } = req.body;
    
        const existingUser = await StudentReg.findOne({email});
    
        if(existingUser){
            console.log("Email Address Already Exist!!");
            res.status(401).json({ message : messages.EMAIL_ALREADY_EXISTS });
            return;
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashedPassword=>",hashedPassword);
     
        console.log("File Name =>",req.file.filename);

        let data = await User.findById(req.params.adminId);
        console.log("Data==>",data);

        const newUser = new StudentReg({
          hostelId : data.hostelId,
          hostelname : data.hostelname,
          firstname : firstName,
          lastname : lastName,
          email : email,
          password : hashedPassword,
          dateOfBirth : dateOfBirth,
          gender : gender,
          phonenumber : phoneNumber,
          aadharcardId : aadharCardId,
          state : state,
          city : city,
          address : address,
          studentHosId : studentHosId,
          photo: req.file.filename,
          role: "Student",
          createdBy:req.params.adminId
        });
        await newUser.save();
    
        res.status(201).json({message : messages.DATA_SUBMITED_SUCCESS});
        } catch (error) {
        console.log("Error Found =>", error);
        res.status(500).json({message : messages.INTERNAL_SERVER_ERROR});
        }
}

const index = async (req, res) => {
  console.log("In Index id==>",req.params.id);

  try{
    let result = await StudentReg.find({deleted : false,createdBy : req.params.id});
    console.log("Result ====>",result);
    let total_recodes = await StudentReg.countDocuments({deleted : false,createdBy : req.params.id});
    console.log("total_recodes==>",total_recodes);
    res.status(200).send({ result, totalRecodes: total_recodes, message : messages.DATA_FOUND_SUCCESS });

  }catch(error){
     console.log("Error =>", error);
     res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });
  } 
}

const view = async (req, res) => {
    console.log("In View");
    console.log("id =>", req.params.id);

    try{
      let user = await StudentReg.findById({_id : req.params.id});
      if(!user){
        return res.status(404).json({message : messages.DATA_NOT_FOUND});
      }
      console.log("user=>",user);
      res.status(200).json({user, message : messages.DATA_FOUND_SUCCESS});

    }catch(error){
      console.error("Error:", error);
      res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });

    } 
}

const edit = async (req, res) => {
    console.log("In Edit");
    console.log("Id =>",req.params.id);

    try{
      let result = await StudentReg.updateOne(
        {_id : req.params.id},
        {
          $set : {
            firstname : req.body.firstName,
            lastname : req.body.lastName,
            // email : req.body.email,
            // password : hashedPassword,
            dateOfBirth : req.body.dateOfBirth,
            gender : req.body.gender,
            phonenumber : req.body.phoneNumber,
            aadharcardId : req.body.aadharCardId,
            state : req.body.state,
            city : req.body.city,
            address : req.body.address,
            studentHosId : req.body.studentHosId,
            photo: req.file.filename,
          }
        }
      );
      res.status(200).json({result, message : messages.DATA_UPDATED_SUCCESS});
    }catch(error){
      console.log("Found Error While Update Student", error);
      res.status(400).json({message : messages.DATA_UPDATED_FAILED});
    }
}

const deleteData = async (req,res) => {
    try{
      console.log("in deleteData");
      
      const user = await StudentReg.findById({_id : req.params.id});
      if(!user){
        return res.status(404).json({message: messages.DATA_NOT_FOUND_ERROR});
      }else{
        await StudentReg.findByIdAndUpdate({_id : req.params.id},{deleted : true});
        res.status(200).json({ message: messages.DATA_DELETE_SUCCESS });
      }
    }catch(error){
      console.log("Error =>", error);
      res.status(400).json({ message: messages.DATA_DELETE_FAILED });
    }
}

const countStudent = async (req,res) => {
  try{
    let totalCount = await StudentReg.countDocuments({deleted : false});
    console.log("totalCount==>",totalCount);
    res.status(200).send({ totalCount, message : messages.DATA_FOUND_SUCCESS });
  }catch(error){
    console.error("Error:", error);
    res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });

  }
}



export default { add, index, view, edit, deleteData,countStudent}