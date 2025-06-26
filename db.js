import { MongoClient } from "mongodb";

const connectionString =process.env.MONGO_URl

const client= new MongoClient(connectionString)

let conn;
try{
    connection =await client.connect();
    console.log("Mongodb conneccted");

}catch(err){
    console.log(err)
}
let db = connection.db("sample_mflix");
export default db;