const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth.controller")

router.post("/register",authController.userRegisterController) // POST/API/AUTH/REGISTER
router.post("/login",authController.userLoginController)

module.exports=router;