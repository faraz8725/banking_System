const express =require("express");
const cors=require("cors");
const app=express();
const connectDB=require("./config/db");
connectDB();
app.use(express.json())
app.use(cors())
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
module.exports=app;