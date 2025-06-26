import express from 'express'
import mongoose from 'mongoose'


const app = express()
const port=process.env.PORT


app.get('/',(req, res)=>{
    res.send("Hello world")
})
app.listen(3000,()=>{
    console.log('Listening on port:', 3000)

})

