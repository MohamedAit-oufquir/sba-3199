import mongoose from "mongoose";

const postschema = new mongoose.Schema({
    title:{
        type :String,
        default:true,
    },
    body:{
        type:String
    },
    author:{
        type:String,
        required:true
    }
})

export default mongoose.model('post',Postchema, 'post')

