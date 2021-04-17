const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmiCalculator", (req, res) => {
  let weight = req.body.weight;
  let height = req.body.height;

  let bmi = (weight / Math.pow(height, 2)) * 703;
  res.send(`Your BMI is: ${bmi}`);
});

app.listen(PORT, () => {
  console.log(`Server.js is listening at http://localhost:${PORT}`);
});
