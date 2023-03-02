const mongoose=require('mongoose');
const meet=require('meet')
const Schema = mongoose.Schema;

const meetSchema=new Schema({
    tag:{type : String , required: true},
    description:{type : String , required: true},
    date:{type : String , required: true},
    location:{type : String , required: true},
    link:{type : String , required: true},
    participants:{type:[user],required:false}

});
module.exports=mongoose.model('Meet',meetSchema);