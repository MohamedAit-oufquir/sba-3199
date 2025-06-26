import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
   name:{
    type:String,
    required: true
   },
description:{
    type:String,
    required:true,
},
   genre :{
    type :String,
    required :true,
   },
   release_years:{
      type:Number,
      unique:true,
      sparse:true,
   }

   
})

   movieSchema.index({name:1})


export default mongoose.model('movie',movieSchema)
