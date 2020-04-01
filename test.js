const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get("/", () => { });
/*
app.get("/numerals/:forNumber", (req,res) => {
    myString = "";
    myString += JSON.stringify(req.query) + "\n"
    myString += JSON.stringify(req.params.forNumber) + "\n"
    res.send(myString);
});
app.get("/numerals/:forNumber/:anotherParam", (req,res) => {
    myString = "";
    myString += JSON.stringify(req.query) + "\n"
    myString += JSON.stringify(req.params.forNumber) + "\n"
    myString += JSON.stringify(req.params.anotherParam) + "\n"
    res.send(myString);
});
*/
app.get("/numerals/:forNumber", (req, res) => {
    myString += JSON.stringify(req.params.forNumber) + "\n"
    res.send(myString);
});

app.get("/nothing", () => {})
app.get("/decimal/:forNumber/:anotherParam", (req, res) => {
    myString = "";
    myString += JSON.stringify(req.query) + "\n"
    myString += JSON.stringify(req.params.forNumber) + "\n"
    myString += JSON.stringify(req.params.anotherParam) + "\n"
    res.send(myString);
});

app.get("/google", (req, res) => {
    fetch("https://google.com")
        .then((response) => response.text())
        .then((text) => res.send(text))
});
app.listen("8080", () => { console.log("8080 is listening") });
app.listen("8081", () => { console.log("8081 is listening") });
console.log("hmm");

const myFunction = () => {
    //Do something
};
