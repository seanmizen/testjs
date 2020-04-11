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
    res.send("Welcome to the page. There's nothing really here.");
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
    let isHighestNumeral = true;
    numeralsArrayRev = Object.keys(numeralNumbers).reverse();   //  Start with the highest value numeral, and go down
    for(let numeralIter in numeralsArrayRev){
        let numeral = numeralsArrayRev[numeralIter];
        let number = numeralNumbers[numeral];
        let timesToRepeat = Math.floor(forNumber / number);
        returnVar = returnVar + numeral.repeat(timesToRepeat) ; //  Add on the right
        forNumber = forNumber - (number * timesToRepeat);       //  You've added the characters for this numeral, now get rid of what you've added
    }
    return (returnVar);
}
const numbers = (forNumeral) => {
    
}
const test_numerals = () => {
    numeral1999 = numerals(1999);
    numeral2000 = numerals(2000);
    numeral2 = numerals(2);
    numeral15 = numerals(15);
    numeral75 = numerals(75);

    console.log("1999 - Expected: MCMXCIX   Actual: " + numeral1999)
    console.log("2000 - Expected: MM        Actual: " + numeral2000)
    console.log("2    - Expected: II        Actual: " + numeral2)
    console.log("15   - Expected: XV        Actual: " + numeral15)
    console.log("75   - Expected: LXXV      Actual: " + numeral75)
}
test_numerals();