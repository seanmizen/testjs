const express = require("express");
const fetch = require("node-fetch");
const app = express();
const numeralNumbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
};
const myFunction = () => {
    console.log(JSON. stringify(obj));
};
app.use((req, res, next) => {
    console.log(req.url);
    next();
})
app.get("/", (req, res) => {
    console.log("/");
    res.send("lol1");
});
/*
app.get("/numerals/:forNumber", (req,res) => {
    myString = "";
    myString += JSON.stringify(req.query) + "\n"
    myString += JSON.stringify(req.params.forNumber) + "\n"
    res.send(myString);
})
app.get("/numerals/:forNumber/:anotherParam", (req,res) => {
    myString = "";
    myString += JSON.stringify(req.query) + "\n"
    myString += JSON.stringify(req.params.forNumber) + "\n"
    myString += JSON.stringify(req.params.anotherParam) + "\n"
    res.send(myString);
})
*/
app.get("/numerals/:forNumber", (req, res) => {
    console.log("/numerals/:forNumber");
    let myString;
    myString += numerals(req.params.forNumber) + "\n"
    res.send(myString);
});

app.get("/nothing", () => {});
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
app.get("/*", (req, res) => {
    res.send("404");
});
app.listen("8080", () => { console.log("8080 is listening") });
app.listen("8081", () => { console.log("8081 is listening") });
console.log("hmm");
const numerals = (forNumber) => {
    let returnVar = "";
    let numeralKeys = Object.keys(numeralNumbers);
    for(let numeral in numeralKeys.reverse()){
        let numberRepresentedByNumeral = numeralNumbers[numeral];
        let timesToRepeat = Math.floor(forNumber / numberRepresentedByNumeral);
        returnVar = numeral.repeat(timesToRepeat) + returnVar; //Add from the right
    }
    console.log(returnVar);
    return (returnVar);
}
const numbers = (forNumeral) => {
    
}
