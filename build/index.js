import express from "express";
import cors from "cors";
// import mongodb from "mongodb";
const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).send("Hello Uniervse");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
