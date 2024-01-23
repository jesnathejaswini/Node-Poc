const express = require(`express`),
  app = express();
const db = require(`./db`);
const studentRoutes = require("./controllers/student.controller");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api/students", studentRoutes);

db.query("SELECT 1")
  .then(() => {
    console.log("db connection successfull");
    app.listen(3000, () => console.log("server started at 3000"));
  })
  .catch((err) => console.log("db connection failed  " + err));
