const prompt = require("prompt-sync")();
let num = parseFloat(prompt("enter your number: "));

function numberSpelling(num) {
  if (num === 1) {
    return "ONE";
  } else if (num === 2) {
    return "TWO";
  } else if (num === 3) {
    return "THREE";
  } else if (num === 4) {
    return "FOUR";
  } else if (num === 5) {
    return "FIVE";
  } else {
    return "Invalid Entry";
  }
}
console.log(numberSpelling(num));

function spelling(num) {
  switch (num) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    default:
      return "invalid entry";
  }
}

console.log(spelling(num));
