import express from 'express'
import mongoose from 'mongoose'


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
// app.get('/posts', async (req, res) => {
//     const posts = await Post.find({})
//     res.json(posts)
// })
app.get('./posts', async (req, res)=>{
  let collection = await db.collection('posts')
  let result = await collection.find({}).limit(50).toArray()
  res.send(result).status(200)
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

app.patch("/posts/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const update = { $push: { comment: req.body } };

  const collection = await db.collection("posts");
  const result = await collection.updateOne(query, update);

  res.send(result);
})


app.delete("/posts/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };

  let collection = await db.collection("posts");
  let result = await collection.deleteOne(query);

  res.send(result);
});
  app.get("/:id", async (req, res) => {
  let collection = await db.collection("post");
  let query = { _id: "149j8f3hf" };
  res.send("test");
});

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})
