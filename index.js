// const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1> welcome to my you tube channel & how are you </h1>");
  }); 

app.get("/main", (req, res) => {
  console.log("hello ");
  res.send("<h1> welcome to my you tube channel  </h1>");
});

app.get("/home", (req, res) => {
  res.send("<h1>Hello World i am home me index ke andar bala hu</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello World i am about me index ke andar bala hu</h1>");
});

app.listen(8000, () => {
  console.log("hi i am listening");
});
