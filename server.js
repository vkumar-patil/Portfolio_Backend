const express = require("express");
const UserRoute = require("./Routes/userroute");
const UploadRoute = require("./Routes/uploadRouter");
const connectedDB = require("./Config/db");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", UserRoute);
app.use("/api/UploadData", UploadRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = 8000;
connectedDB();
app.listen(port, () => {
  console.log("http//localhost:8000");
});
