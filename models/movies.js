import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
   name:{
    type:String
   },
   rating:{
    type:Number
   },

  release_years:{
    type :Number

   },
   genre :{
    type :String
   }
   
})

movieSchema.index({name:1})

export default mongoose.model('movies',movieSchema, 'movies')
