const express = require("express");

const router = express.Router();

router.get("/admin/add-product", (req, res, next) => {
  console.log("In the middleware");

  res.send(`<form action="/product" method="POST">
    <input type="text" name="title">
      <button type="submit">Add Product</button>
    </input>
  </form>`); // allows the request to continue to the next middleware in line
});

router.post("/admin/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
