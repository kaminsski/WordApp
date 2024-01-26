const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    turkish:{
        type:String,
        required:true
    },
    english:{
        type:String,
        required:true
    },
    isFailed:{
        type:Boolean,
        default:false
    },sentence:{
        type:String,
        required:true
    }
})
const WordModel = mongoose.model("word",WordSchema)
module.exports={ WordModel}