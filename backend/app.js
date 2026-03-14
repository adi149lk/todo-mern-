const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const errcontroller = require("./controllers/ere404");
const apiRo = require("./routes/api");
const PORT = 3001;
const dbPath =
  

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api", apiRo);
app.use(errcontroller.get404);

mongoose
  .connect(dbPath)
  .then(() => {
    console.log("connected sucessfully");
    app.listen(PORT, () => {
      console.log(`server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err while connecting", err);
  });
