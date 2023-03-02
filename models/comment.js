const mongoose=require('mongoose');


const Schema = mongoose.Schema;
const commentSchema=new Schema({
    note:{type : String,required: true},
    content:{type : String , required: true},
    userDetails:{
            id: { type:String,required:true},
            name:{type:String,required:true},
    },
    companyDetails:{
        id: { type:String,required:true},
    }

});
module.exports=mongoose.model('Comment',commentSchema);
