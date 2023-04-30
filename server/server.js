import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import courseRoutes from "./routes/course.js";
import instrRoutes from "./routes/instructor.js"

const port = process.env.PORT || 8080;

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

app.use("/course", courseRoutes);
app.use("/instructor", instrRoutes);

app.get('/', async function(req, res) {
    console.log("Boiler Reviews Server")
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});