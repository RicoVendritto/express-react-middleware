const { Person } = require("./models");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());

app.use("/people", (req, res, next) => {
  console.log("Hello, world!");
  next();
});

app.get("/people", async (req, res) => {
  const records = await Person.findAll();
  res.json(records);
});

app.post("/post", async (req, res) => {
  await Person.create({
    name: req.body.name,
    company: req.body.company,
    role: req.body.role,
    sector: req.body.sector
  });
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
