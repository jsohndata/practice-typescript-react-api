import express from "express";
import cors from "cors";
//@ts-ignore
import dotenv from "dotenv";
//@ts-ignore
import mongodb from "mongodb";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", (req,res) => {
  console.log(req.body);
  res.status(200).send("Hello Uniervse");
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
