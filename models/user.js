const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const userSchema=new Schema({
    name:{type : String,required:true},
    firstname:{type : String,required:true},
    email:{type : String,required:true},
    password:{type : String , required: true},

    /*comment:{
    type: [Schema.Types.ObjectId],
        ref: 'Comment'
}*/
});
module.exports=mongoose.model('User',userSchema);