const express = require("express");
const app = express();
app.get("/", ()=>{});
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
app.get("/numerals/:forNumber", (req,res) => {
    myString += JSON.stringify(req.params.forNumber) + "\n"
    res.send(myString);
});
app.get("/decimal/:forNumber/:anotherParam", (req,res) => {
    myString = "";
    myString += JSON.stringify(req.query) + "\n"
    myString += JSON.stringify(req.params.forNumber) + "\n"
    myString += JSON.stringify(req.params.anotherParam) + "\n"
    res.send(myString);
});
app.listen("8080", ()=>{console.log("8080 is listening")});
app.listen("8081", ()=>{console.log("8081 is listening")});
console.log("hmm");

const myFunction = () => {
    //Do something
};
