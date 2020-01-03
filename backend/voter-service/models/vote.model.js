const mongoose= require("mongoose");

const voteSchema= new mongoose.Schema({
    //_id:{type:Number},
    name:{type:String, required:true},
    state:{type:String, required:true},
    about:{type:String, required:true},
    voteCount:{type:Number, required:false},
});
module.exports=mongoose.model('Vote',voteSchema);