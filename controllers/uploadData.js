const Uploads = require("../Model/UploadModel");
exports.Uploads = async (req, res) => {
  const { title, sentence, about, experianse, projects, technologis } =
    req.body;
  const file = req.file.filename;
  try {
    const newupload = new Uploads({
      title,
      sentence,
      about,
      experianse,
      projects,
      technologis,
      file,
    });
    await newupload.save();
    res.status(201).send({ message: "data puload successful" });
  } catch (error) {
    res.status(500).send(error);
  }
};
