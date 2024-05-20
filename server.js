const express=require("express");
const mongoose=require("mongoose");
const {dburl,port}=require("./config/hide.js");
const cors = require("cors");//two port merge

//data base connection
const db= async()=>{
   try{
     await mongoose.connect(`${dburl}`);
     console.log("database connected successfully");
   }catch(err){
    console.log(err);
   }
}
db();

// server create /////////////////////
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Router Stich
require("./router/user.route.js")(app);//user routes
require("./router/admin.route.js")(app);//admin router
require("./router/vender.route.js")(app);//vender routes
require("./router/product.route.js")(app);//Product routes
require("./router/catagory.route.js")(app);//catgory routes
app.listen(`${port}`,()=>{
    console.log(`run server in ${port} port`);
})