const express = require("express");
const UserRoute = require("./Routes/userroute");
const connectedDB = require("./Config/db");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("api/user", UserRoute);
app.use("/uploads", express.static("uploads"));
const port = 8000;
connectedDB();
app.listen(port, () => {
  console.log("http//localhost:8000");
});
