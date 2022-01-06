import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import exerciseRouter from "./routes/exercises.js";
import usersRouter from "./routes/users.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"),
//     res.setHeader("Access-Control-Allow-Headers", "*"),
//     next();
// });

// db connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// routes
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen(PORT, console.log(`app running on http://localhost:${PORT}`));
