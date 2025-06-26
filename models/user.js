import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   userName:{
    type:String,
    required: true
   },
   email:{
    type: String,
    required:true,
},
password:{
    type:String,
    required:true,

},


   })
   
   movieSchema.index({name:1})
   
   export default mongoose.model('users',userSchemaSchema)
   