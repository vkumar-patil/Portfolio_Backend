const mongoose = require("mongoose");
const { type } = require("os");
const { StringDecoder } = require("string_decoder");

const UploadSchema = mongoose.Schema({
  file: { type: String, required: true },
  title: { type: String, required: true },
  sentence: { type: String, required: true },
  about: { type: String, required: true },
  experianse: { type: String, required: true },
  projects: { type: String, required: true },
  technologis: { type: String, required: true },
});
module.exports = mongoose.model("Uploads", UploadSchema);
