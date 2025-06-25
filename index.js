import express from 'express'
import mongoose from 'mongoose'


const app = express()
// const port=3000

await mongoose.connect('mongodb+srv://oufquir9:Mohamed0626@cluster0.uwpbigj.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')

app.get('/',(req, res)=>{
    res.send("Hello world")
})
app.listen(3000,()=>{
    console.log('Listening on port:', 3000)

})
