import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/data_routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(cors());

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server is running"));

// use routes
app.use('/api/data', router);

// setting up port
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE_URL)
    .then(() => app.listen(PORT))
    .then(() => console.log(`Connected to DataBase and listening at port ${PORT}`))
    .catch((err) => console.log(err));