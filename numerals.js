const numeralNumbers = {
  //Fun if hacky: add your prefixes(IV, IX, XL, XC, CD, CM) as special cases here and your numerals() function can be written very elegantly.
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};
const numerals = (forNumber) => {
  let returnVar = "";
  numeralsArrayRev = Object.keys(numeralNumbers).reverse(); //  Start with the highest value numeral, and go down
  for (let numeralIter in numeralsArrayRev) {
    let numeral = numeralsArrayRev[numeralIter];
    let number = numeralNumbers[numeral];
    let timesToRepeat = Math.floor(forNumber / number);
    returnVar = returnVar + numeral.repeat(timesToRepeat); //  Add on the right
    forNumber = forNumber - number * timesToRepeat; //  You've added the characters for this numeral, now get rid of what you've added
  }
  return returnVar;
};
const numbers = (forNumeral) => {
  let returnVar = 0;
  numeralsArrayRev = Object.keys(numeralNumbers).reverse(); //  Start with the highest value numeral, and go down
  for (let numeralIter in numeralsArrayRev) {
    let numeral = numeralsArrayRev[numeralIter];
    let number = numeralNumbers[numeral];
    let nextChars = forNumeral.slice(0, length(numeral));
    while (nextChars === numeral) {
      returnVar += number;
      forNumeral = forNumeral.slice(length(numeral), length(forNumeral));
    }
  }
  if (length(forNumeral) > 0) {
    console.log("Error in numbers subroutine");
    returnVar = -1;
  }
  return returnVar;
};
//Exports:
module.exports = { numerals, numbers };
