const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser);

app.use("/", (req, res, next) => {
  console.log("this always run");
  // next();
  res.send("Hello from express");
});

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  // const product = {
  //   name: "Hp",
  //   price: 24000000,
  // };

  res.send(`<form action="/product" method="POST">
    <input type="text" name="title">
      <button type="submit">
        Add Product
      </button>
    </input>
  </form>`); // allows the request to continue to the next middleware in line
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/users", (req, res, next) => {
  console.log("Another middleware");
  // ....
  // return a respons => res.send()

  const users = {
    name: "Adi Handsome",
    age: 23,
  };
  res.send(users);
});

app.listen(3000);
