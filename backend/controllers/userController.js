import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const token = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
  try {
    const {email,password} = req.body

    const user = await userModel.findOne({email})

    // if user exist or not
    if(!user){
        return res.json({success:false,msg:"User do not exist"})
    }

    // comparing passwords
    const comparePassword = await bcrypt.compare(password,user.password)

    if(comparePassword){
        const tokenSign = token(user._id)
        res.json({success:true, tokenSign})
    } else {
        res.json({success:false,msg:"Passwords dont match!"})
    }

  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message})
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await userModel.findOne({email})

    // if user exist or not
    if(userExists){
        return res.json({success:false,msg:'User Already Exist!'})
    }

    // validating email
    if(!validator.isEmail(email)){
        return res.json({success:false,msg:'Please enter a valid email'})
    }

    // checking strong password
    if(password.length < 8){
        return res.json({success:false,msg:'Please enter a 8 digit password'})
    }

    // hashing user password
    const genSalt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,genSalt)

    // creating a user in DB
    const user = await userModel.create({ name, email, password:hashedPassword })

    // generating token
    const tokenSign = token(user._id)

    res.json({success:true, tokenSign})

  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message})
  }
};

export { loginUser, registerUser };
