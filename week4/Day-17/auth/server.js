const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "AIzaSyBaOpASI1Bk5SFl53wMS1MtH7DteiHupII",
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
