const mongoose=require('mongoose');


const Schema = mongoose.Schema;
const commentSchema=new Schema({
    mark:{type : Number,required: true , default: 0},
    content:{type : String , required: true},
    userDetails:{
            id: { type:String,required:true},
            name:{type:String,required:true},
    },
    companyDetails:{
        id: { type:String,required:true},
    },
    dateOfComment:{ type:Date,required:false,default:Date.now()}

});
module.exports=mongoose.model('Comment',commentSchema);
