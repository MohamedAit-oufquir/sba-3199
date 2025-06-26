import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

import dataRouter from "./routes/user.js"
import movieRouter from "./routes/movies.js"
import reviewRouter from "./routes/review.js"


import User from "./model/user.js"
import review from "./model/review.js"
import movie from "./model/movie.js"

import movieSchema from "./model/movie.js"
import reviewSchema from "./model/review.js"
import userSchema from "./model/user.js"


const app = express()
const PORT = process.env.PORT
// const PORT = 3000
mongoose.connect(process.env.MONGO_URL) //added after adding the env isolation method.
// console.log("connected")
//middleware to read JSON
app.use(express.json());
app.use('/api/User', dataRouter)
app.use ('/api/review', reviewRouter)
app.use ('/api/movie', movieRouter)
app.get('/', (req, res) => {
    res.send('Hello Mongoose')
}),





app.use((error, req, res, next) =>{
    console.error('Express Error Middleware', error);
    if (error) {
        res.status(error.status).json({
            message:error.message });
    } else {
       res.status(500).json ({message:'Internal Server Error',error:error.message||error});
    }
});
    app.listen(3000, () => {
        console.log(`Listening on port http://localhost:${3000}`);
    })







