const express = require("express");
const fetch = require("node-fetch");
const { numerals, numbers } = require("./numerals"); //.js is implied, { myThing } says import only this thing //"object destructuring"
const app = express();
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.get("/", (req, res) => {
  console.log("/");
  res.send("Welcome to the page. There's nothing really here yet.");
});
app.get("/numerals/:forNumber", (req, res) => {
  console.log("/numerals/:forNumber");
  let myString;
  try {
    myString = numerals(forNumber);
  } catch {
    myString = "Invalid input supplied. Try again.";
  }
  res.send(myString);
});
app.get("/nothing", () => {});
app.get("/numbers/:forNumeral", (req, res) => {
  console.log("/numerals/:forNumber");
  let myString;
  let myString;
  try {
    myString = numerals(forNumber);
  } catch {
    myString = "Invalid input supplied. Try again.";
  }
  res.send(myString);
});
app.get("/google", (req, res) => {
  fetch("https://google.com")
    .then((response) => response.text())
    .then((text) => res.send(text));
});
app.get("/*", (req, res) => {
  res.send("404");
});
app.listen("8080", () => {
  console.log("8080 is listening");
});
app.listen("8081", () => {
  console.log("8081 is listening");
});
console.log("hmm");
