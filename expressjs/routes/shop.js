const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // next();
  res.send("Hello from express");
});

router.get("/users", (req, res, next) => {
  console.log("Another middleware");
  // ....
  // return a respons => res.send()

  const users = {
    name: "Adi Handsome",
    age: 23,
  };
  res.send(users);
});

module.exports = router;
