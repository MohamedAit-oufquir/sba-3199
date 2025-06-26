import express from 'express'
import mongoose from 'mongoose'
import Movie from "./models/movies.js"
import 'dotenv/config'
import movies from './models/movies.js'

const app = express()

const PORT = process.env.PORT

app.use(express.json())

await mongoose.connect(process.env.MONGO_URL)

console.log('MongoDB Connected')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/movies",async(req,res)=>{
  try{
    let movies = await Movie.find({})
    res.send(movies)

  }catch(err){
res.send({error:err.message})
  }
})
//patch
 app.patch("/movies",async(req, res)=>{
  try{
      const movies=await Movie.find()
  res.send(movies)

  }catch(erro){
    res.send({erro:err.message})
  }

 })

 //delete
app.delete('/movies',async(req, res)=>{
  try{
    const movies = await Movie.find()
    res.send(movies)
  }catch(erro){
    res.send({err:err.message})
  }
})

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT)
})
