const mongoose = require("mongoose");

const UploadSchema = mongoose.Schema({
  file: { type: String, required: true },
  techimages: [{ type: String }],
  resume: { type: String },
  title: { type: String, required: true },
  sentence: { type: String, required: true },
  about: { type: String, required: true },
  experianse: { type: String, required: true },
  projects: { type: String, required: true },
  technologis: { type: String, required: true },
});
module.exports = mongoose.model("Uploads", UploadSchema);
