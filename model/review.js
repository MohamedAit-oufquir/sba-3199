import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
   movieName:{
    type:String,
    required: true
   },
   review:{
    type: String,
    required:true,
},
rating:{
    type:Number,
    min:0,
    max:5,

   },

   })
   
//    movieSchema.index({name:1})
   
   export default mongoose.model('review',reviewSchema)