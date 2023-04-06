require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4000",
  })
);

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

// error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
