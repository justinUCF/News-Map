// This file establishes a connection to a MongoDB database using the MongoDB Node.js driver.
import "dotenv/config";
// Import the MongoClient from the mongodb package
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_CONNECTION_STRING || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try{
    //Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    console.log("Connected to MongoDB successfully");

}catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

let db = client.db("record");

export default db;