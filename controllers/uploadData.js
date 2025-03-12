const Uploads = require("../Model/UploadModel");
exports.Uploads = async (req, res) => {
  const { title, sentence, about, experianse, projects, technologis } =
    req.body;
  const file = req.files["file"][0].filename;
  const resume = req.files["resume"][0].filename;
  const techimages = req.files["techimages"]
    ? req.files["techimages"].map((file) => file.filename)
    : [];

  if (!file) {
    return res.status(400).send({ message: "file not upload " });
  }
  try {
    const newupload = new Uploads({
      title,
      sentence,
      about,
      experianse,
      projects,
      technologis,
      file,
      resume,
      techimages,
    });
    await newupload.save();
    res.status(201).send({ message: "data puload successful" });
  } catch (error) {
    res.status(500).send(error);
  }
};
