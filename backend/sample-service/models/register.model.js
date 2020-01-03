const mongoose= require("mongoose");

const registerSchema= new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:Number, required:true},
});
module.exports=mongoose.model('Register',registerSchema);