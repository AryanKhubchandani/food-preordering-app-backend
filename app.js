require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.dbURI)
  .then((result) =>
    app.listen(3000 || process.env.PORT, () => {
      console.log("Server is running and connect to mongodb");
    })
  )
  .catch((err) => console.log(err));

app.use("/api", require("./routes/api"));
