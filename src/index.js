import "./styles.css";

//grabbing the input output box
var inputOutput = document.getElementById("inputOutput");

//result query
var result = "";

//Grabbing all the buttons
var clear = document.getElementById("clear");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var add = document.getElementById("add");
var substract = document.getElementById("substract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");
var decimal = document.getElementById("decimal");
var percentage = document.getElementById("percentage");

//Adding Event Listeners to buttons
clear.addEventListener("click", function () {
  result = "";
  inputOutput.innerHTML = "";
});
zero.addEventListener("click", function () {
  if (inputOutput.innerHTML.length > 0) {
    inputOutput.innerHTML += "0";
    result += "0";
  }
});
one.addEventListener("click", function () {
  inputOutput.innerHTML += "1";
  result += "1";
});
two.addEventListener("click", function () {
  inputOutput.innerHTML += "2";
  result += "2";
});
three.addEventListener("click", function () {
  inputOutput.innerHTML += "3";
  result += "3";
});
four.addEventListener("click", function () {
  inputOutput.innerHTML += "4";
  result += "4";
});
five.addEventListener("click", function () {
  inputOutput.innerHTML += "5";
  result += "5";
});
six.addEventListener("click", function () {
  inputOutput.innerHTML += "6";
  result += "6";
});
seven.addEventListener("click", function () {
  inputOutput.innerHTML += "7";
  result += "7";
});
eight.addEventListener("click", function () {
  inputOutput.innerHTML += "8";
  result += "8";
});
nine.addEventListener("click", function () {
  inputOutput.innerHTML += "9";
  result += "9";
});
add.addEventListener("click", function () {
  inputOutput.innerHTML = "";
  result += " + ";
});
multiply.addEventListener("click", function () {
  inputOutput.innerHTML = "";
  result += " * ";
});
divide.addEventListener("click", function () {
  inputOutput.innerHTML = "";
  result += " / ";
});
substract.addEventListener("click", function () {
  inputOutput.innerHTML = "";
  result += " - ";
});
decimal.addEventListener("click", function () {
  inputOutput.innerHTML += ".";
  result += ".";
});
percentage.addEventListener("click", function () {
  var percentValue = parseFloat(inputOutput.innerHTML);
  inputOutput.innerHTML = parseFloat(percentValue / 100);
  result = parseFloat(percentValue / 100);
});
equals.addEventListener("click", function () {
  let output = eval(result);
  result = output;
  inputOutput.innerHTML = output;
});

// console.log(one, two,three,four,five,six,seven,eight,nine);
