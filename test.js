const express = require("express");
const fetch = require("node-fetch");
const app = express();

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
    var myString;
    myString += JSON.stringify(req.params.forNumber) + "\n"
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
app.listen("8080", () => { console.log("8080 is listening") });
app.listen("8081", () => { console.log("8081 is listening") });
console.log("hmm");

const myFunction = () => {
    var obj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    };

    console.log(JSON. stringify(obj));
};

/* 	Symbol 	I 	V 	X 	L 	C 	D 	M
	Value 	1 	5 	10 	50 	100 	500 	1,000 
*/
