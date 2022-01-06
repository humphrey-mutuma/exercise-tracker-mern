import express from "express";
import User from "../models/user.model.js";
const router = express.Router();

// fetch all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

// add a user
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("erro: " + err));
});

// other routes here ...

export default router;
