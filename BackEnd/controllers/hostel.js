import Hostel from "../model/Hostel.js";
import messages from "../constants/message.js";
import User from "../model/User.js";

const add = async (req, res) => {
    console.log("In hostel controller");
    console.log("Data =>", req.body);
    console.log("Hos Img =>", req.files);
    try {
        const { hostelName, phoneNumber, email, noOfRoom, uniqueCode, state, city, address } = req.body;

        const existingEmail = await Hostel.findOne({ email });

        if (existingEmail) {
            console.log("Email is Already Exist!!");
            res.status(401).json({ message: messages.EMAIL_ALREADY_EXISTS });
            return;
        }

        const fileNames = req.files.map(file => file.filename);

        const newHostel = new Hostel({
            hostelName,
            phoneNumber,
            email,
            noOfRoom,
            uniqueCode,
            state,
            city,
            address,
            photo: fileNames
        });
        await newHostel.save();
        res.status(201).json({message: messages.DATA_SUBMITED_SUCCESS });
    } catch (error) {
        console.log("Error =>", error);
        res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });
    }
}

const index = async (req, res) => {
  try {
      let result = await Hostel.find({ deleted: false });
      console.log("Result =>", result);
      let total_recodes = await Hostel.countDocuments({deleted : false});
      console.log("total_recodes==>",total_recodes);
      res.status(200).send({ result, totalRecodes: total_recodes, message : messages.DATA_FOUND_SUCCESS });
  } catch (error) {
      console.log("Error =>", error);
      res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });
  }
}

const view = async (req, res) => {
    console.log("In View Hostel");
    console.log("id: ", req.params.id);
    try {
      const result = await Hostel.findById({_id : req.params.id});
      console.log("result in view ==>", result);

      if (!result) {
        return res.status(404).json({ message: messages.DATA_NOT_FOUND_ERROR });
      }
      res.status(200).json({result, message : messages.DATA_FOUND_SUCCESS});
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });
    }
}
  
const edit = async (req, res) => {
    console.log("In edit");
    console.log("id", req.params.id);

     // Extract file names
     const hostelphoto = req.files.hostelphoto ? req.files.hostelphoto[0].filename : null;
     const aadharphoto = req.files.aadharphoto ? req.files.aadharphoto[0].filename : null;

    try{
        const result = await Hostel.updateOne(
            {_id : req.params.id},
            {
                $set : {
                    hostelName : req.body.hostelName,
                    hostelPhoneNumber :  req.body.hostelPhoneNumber,
                    ownerName : req.body.ownerName,
                    ownerPhoneNumber : req.body.ownerPhoneNumber,
                    email : req.body.email,
                    password : req.body.password,
                    state : req.body.state,
                    city : req.body.city,
                    address : req.body.address,
                    hostelphoto,
                    aadharphoto,
                }
            }
        );
        res.status(200).json({result, message : messages.DATA_UPDATED_SUCCESS});
    }catch(error){
        console.log("Found Error While Update", error);
        res.status(400).json({message : messages.DATA_UPDATED_FAILED});
    }
}

const deleteData = async (req, res) => {
  try {
      console.log("In deleteData");
      console.log("Id:", req.params.id);

      const hostel = await Hostel.findById({ _id : req.params.id });
      if (!hostel) {
          return res.status(404).json({ message: messages.DATA_NOT_FOUND_ERROR });
      } else {
          await Hostel.findOneAndUpdate({ _id : req.params.id },{ deleted: true });
          console.log("Hostel deleted successfully !!");
          res.status(200).json({ message: messages.DATA_DELETE_SUCCESS });
      }
  } catch (error) {
      console.log("Error =>", error);
      res.status(400).json({ message: messages.DATA_DELETE_FAILED });
  }
}

const roomsCount = async (req, res) => {
    console.log("In roomCount Id=>",req.params.id);
    
    try{
       console.log("try block");
       let data = await User.findByIdAndUpdate({_id : req.params.id});
       console.log("Found Admin==>",data);

       let hostel = data.hostelId;

       let hostelData = await Hostel.findOne({uniqueCode : hostel});
       console.log("hostelData=>",hostelData);

       let noOfRooms = hostelData.noOfRoom;

       res.status(200).send({ noOfRooms, message : messages.DATA_FOUND_SUCCESS });

    }catch(error){
        console.log("Error =>", error);
        res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });
    }
}

const bedsCount = async (req, res) => {
    try{
        console.log("In try Id=>", req.params.id);

        let data = await User.findById({_id : req.params.id});
        console.log(" admin data=>",data);

        let hostelId = data.hostelId;

        let hostelData = await Hostel.findOne({uniqueCode : hostelId});
        console.log("hostelData =>",hostelData);

        let avabeds = hostelData.availableBeds;
        console.log("avabeds=>",avabeds);

        res.status(200).send({ avabeds, message : messages.DATA_FOUND_SUCCESS });
    }catch(error){
        console.log("Error =>", error);
        res.status(500).json({ message: messages.INTERNAL_SERVER_ERROR });
    }
}


const addNew = async (req,res) => {
    console.log("hostel controller");
    console.log("req.body==>",req.body);

    console.log("All File Data  =>", req.files);

    try{
        console.log("in try");
        const {hostelName,hostelPhoneNumber,ownerName,ownerPhoneNumber,email,password,state,city,address } = req.body;

        const existingEmail = await Hostel.findOne({ email });

        if (existingEmail) {
            console.log("Email is Already Exist!!");
            res.status(401).json({ message: messages.EMAIL_ALREADY_EXISTS });
            return;
        }

         

        // Extract file names
        const hostelphoto = req.files.hostelphoto ? req.files.hostelphoto[0].filename : null;
        const aadharphoto = req.files.aadharphoto ? req.files.aadharphoto[0].filename : null;

        const newHostel = new Hostel({
            hostelName,
            hostelPhoneNumber,
            ownerName,
            ownerPhoneNumber,
            email,
            password,
            state,
            city,
            address,
            hostelphoto,
            aadharphoto,
            role : 'Customer'
        });
        await newHostel.save();
        console.log("newHostel=====>",newHostel);
        res.status(201).json({message: messages.DATA_SUBMITED_SUCCESS });
       
    }catch(error){
        console.log("Error =>", error);
    }

}




export default {add, index, view, edit, deleteData, roomsCount, bedsCount, addNew };







