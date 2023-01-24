import express from "express";
import dotevn from "dotenv";

const app = express();
dotevn.config();

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })