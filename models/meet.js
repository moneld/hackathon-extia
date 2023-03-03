const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const meetSchema=new Schema({
    tag:{type : String , required: true},
    description:{type : String , required: true},
    date:{type : Date , required: true},
    address:{
        street:{type : String , required: true},
        house:{type : String , required: true},
        city:{type : String , required: true},
    }/*,
    link:{type : String , required: true},
    participants:{type:[user],required:false}*/

});
module.exports=mongoose.model('Meet',meetSchema);