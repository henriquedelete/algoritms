const { equal } = require("assert");

const sumTwo = require("./sumTwo");

const expect = 4;

if (sumTwo(3, 1) == expect) {
  console.log("Pass");
} else {
  console.log("Error x-x");
}
