const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const commentSchema=new Schema({
    note:{type : Number,required: true},
    content:{type : String , required: true},
    userId:{type : String ,required:true}

});
module.exports=mongoose.model('Comment',commentSchema);