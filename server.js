import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connection established successfully');
})

// routes
app.get("/", (re, res) => {
  res.status(200).send("hello there!");
});

app.listen(PORT, console.log(`app running on http://localhost:${PORT}`));
