import express from "express";
import cors from "cors";
import "dotenv/config";
//@ts-ignore
import {MongoClient} from "mongodb";

const app = express();
app.use(cors());
app.use(express.json());


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("c11-practice");
const collection = db.collection("ts-practice");



app.post("/", async (req,res) => {
  console.log(req.body);
  const newDoc = await collection.insertOne(req.body);
  res.status(200).send("Hello Uniervse");
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
