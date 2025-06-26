import express from 'express'
import Mongoose from 'mongoose'




const app = express()
// const port=3000 
//  process.env.PORT
await mongoose.connect('')


app.get('/',(req, res)=>{
    res.send("Hello world")
})
app .listen(3000,()=>{
    console.log('Listening on port:', 3000)

});
    