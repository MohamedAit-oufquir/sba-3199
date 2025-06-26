import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
   name:{
    type:String,
    required: true
   },
   rating:{
    type:Number,
    min:0,
    max:10,

   },

  release_years:{
    type :Number,
    required:true,
    unique:true,

   },
   genre :{
    type :String,
    required :true,
    items:String,
   },
   overview:{
    type:String,
   },
   runtime:{
    type:Number,
   }
   
})

movieSchema.index({name:1})

export default mongoose.model('movies',movieSchema, 'movies')
