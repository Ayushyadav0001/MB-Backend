const mongoose = require("mongoose");

const MagnetBrainsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const MagnetBrainsDatabase = mongoose.model(
  "Logincredentials",
  MagnetBrainsSchema
);
module.exports = MagnetBrainsDatabase;
