const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");
const emailService=require("../services/email.service")



async function authMiddleware(req,res,next){

  const token=req.cookies.token || req.headers.authorization?.split("")[1]
  if(!token){
    return res.status(401).json({
      message:"Unauthorized access,token is missing"
    })
  }
  try{
const decoded=jwt.verify(token,process.env.JWT_SECRET)
  }catch(err){
    return res.status(401).json({
      message:"Unauthorized access,token is invalid"
    })
  }
}


/
const userModel=require("../models/user.model");
const jwt=require("jsonwebtoken");
const emailService=require("../services/email.service")



async function authMiddleware(req,res,next){

  const token=req.cookies.token || req.headers.authorization?.split("")[1]
  if(!token){
    return res.status(401).json({
      message:"Unauthorized access,token is missing"
    })
  }
  try{
const decoded=jwt.verify(token,process.env.JWT_SECRET)
  }catch(err){
    return res.status(401).json({
      message:"Unauthorized access,token is invalid"
    })
  }
} */