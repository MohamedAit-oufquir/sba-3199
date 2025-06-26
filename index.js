import express from 'express'
import mongoose from 'mongoose'

// import Post from './models/post.js'

import 'dotenv/config'

const app = express()

const PORT = process.env.PORT

app.use(express.json())

await mongoose.connect(process.env.MONGO_URL)

console.log('MongoDB Connected')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// get post
app.get('/posts', async (req, res) => {
    const posts = await Post.find({})
    res.json(posts)
})


app.post('/posts', async (req, res) => {

    console.log(req.body)

    const postDoc = new Post({
        author: req.body.author
    })

    const result = await postDoc.save()

    // Alternative:

    // const result = await Post.create({ author: req.body.author })

    res.json(result)
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})
