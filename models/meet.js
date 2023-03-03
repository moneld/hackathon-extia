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
    },
    img_url:{type : String , required: true},
    title:{type : String , required: true}
    //user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});
module.exports=mongoose.model('Meet',meetSchema);