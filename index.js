const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MagnetBrainsDatabase = require("./Models/Data");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.Mongo_URL);

app.post("/", (req, res) => {
  const { email, password } = req.body;
  MagnetBrainsDatabase.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect deatils");
      }
    } else {
      res.json("no data found");
    }
  });
});

app.post("/SignUp", (req, res) => {
  MagnetBrainsDatabase.create(req.body)
    .then((MgnetBrainsDetails) => res.json(MgnetBrainsDetails))
    .catch((err) => res.json(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
