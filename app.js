import { MongoClient } from "mongodb";

const connectionString =prot
const client= new MongoClient(connectionString);
let connection;
try{
    connection =await client.connect();
    console.log("conneccted");

}catch(err){
    console.log(err)
}
let db = connection.db("sample_training");
export default db;