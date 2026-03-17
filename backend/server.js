require("dotenv").config();
const app=require("./src/app");
const connectToDB=require("./src/config/db");
connectToDB();
PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`SERCER IS CONNECTED TO ${PORT}`)

})