// VARIABLE DEFINITION
var variable = "variable"; // var
let letVariable = "letVariable"; // let
const constVariable = "constVariable"; // const

// DATA TYPES
// String
let string = "string";
// Number
let number = 1;
// Boolean
let boolean = true;
// Array
let array = [1, 2, 3];
// Object
let object = { key: "value" };
// Null
let nullVariable = null;
// Undefined
let undefinedVariable = undefined;

// FUNCTIONS
// Function Declaration
function functionDeclaration() {
  return "functionDeclaration";
}
// Function Expression
const functionExpression = function () {
  return "functionExpression";
};
// Arrow Function
const arrowFunction = () => {
  return "arrowFunction";
};

// CONDITIONALS
// If Statement
if (true) {
  console.log("if statement");
}
// Else If Statement
if (false) {
  console.log("if statement");
} else if (true) {
  console.log("else if statement");
}
// Else Statement
if (false) {
  console.log("if statement");
} else if (false) {
  console.log("else if statement");
} else {
  console.log("else statement");
}
// Ternary Operator
const expand = true;
expand ? console.log("expanded") : console.log("collapsed");

// LOOPS
// For Loop
for (let i = 0; i < 5; i++) {
  console.log("for loop");
}
// While Loop
let i = 0;
while (i < 5) {
  console.log("while loop");
  i++;
}
// Do While Loop
let j = 0;
do {
  console.log("do while loop");
  j++;
} while (j < 5);

// ARRAY METHODS
// Push
let pushArray = [1, 2, 3];
pushArray.push(4);
// Map
let mapArray = [1, 2, 3];
mapArray.map((item) => {
  return item;
});
// Filter
let filterArray = [1, 2, 3];
filterArray.filter((item) => {
  return item;
});
// Reduce
let reduceArray = [1, 2, 3];
reduceArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// For Each
let forEachArray = [1, 2, 3];
forEachArray.forEach((item) => {
  console.log(item);
});

// TEMPLATE LITERALS
const templateLiteral = `<h1>templateLiteral ${variable}</h1>`;

// DOM METHODS
// Query Selector
document.querySelector("div");
// Query Selector All
document.querySelectorAll("div");
// Get Element By Id
document.getElementById("div");
// Get Elements By Class Name
document.getElementsByClassName("div");
// Get Elements By Tag Name
document.getElementsByTagName("div");
// Get Elements By Name
document.getElementsByName("div");
// Get Elements By Tag Name
document.getElementsByTagName("div");

// DOM ELEMENT EVENTS
// On Click
document.querySelector("div").onclick = () => {
  console.log("onclick");
};
// On Change
document.querySelector("div").onchange = () => {
  console.log("onchange");
};
// On Submit
document.querySelector("div").onsubmit = () => {
  console.log("onsubmit");
};
// On Key Down
document.querySelector("div").onkeydown = () => {
  console.log("onkeydown");
};
// On Mouse Over
document.querySelector("div").onmouseover = () => {
  console.log("onmouseover");
};
// On Scroll
document.querySelector("div").onscroll = () => {
  console.log("onscroll");
};
// On Focus
document.querySelector("div").onfocus = () => {
  console.log("onfocus");
};
// On Blur
document.querySelector("div").onblur = () => {
  console.log("onblur");
};
// On Resize
document.querySelector("div").onresize = () => {
  console.log("onresize");
};
// On Load
document.querySelector("div").onload = () => {
  console.log("onload");
};
// On Animation End
document.querySelector("div").onanimationend = () => {
  console.log("onanimationend");
};
// On Transition End
document.querySelector("div").ontransitionend = () => {
  console.log("ontransitionend");
};

// DOM ELEMENT STYLE METHODS
// Get Property Value
document.querySelector("div").style.getPropertyValue("background");
// Set Property
document.querySelector("div").style.setProperty("background", "red");
// Remove Property
document.querySelector("div").style.removeProperty("background");

// DOM ELEMENT CLASS LIST METHODS
// Add
document.querySelector("div").classList.add("class");
// Remove
document.querySelector("div").classList.remove("class");
// Toggle
document.querySelector("div").classList.toggle("class");
// Contains
document.querySelector("div").classList.contains("class");
// Replace
document.querySelector("div").classList.replace("class", "class2");
// Item
document.querySelector("div").classList.item(0);
// Length
document.querySelector("div").classList.length;

// DOM ELEMENT PARENT NODE METHODS
// Append Child
document.querySelector("div").appendChild(document.createElement("div"));
// Append
document.querySelector("div").append(document.createElement("div"));
// insertAfterBegin
document
  .querySelector("div")
  .insertAdjacentElement("afterbegin", document.createElement("div"));
// insertBeforeEnd
document
  .querySelector("div")
  .insertAdjacentElement("beforeend", document.createElement("div"));
// insertAfterEnd
document
  .querySelector("div")
  .insertAdjacentElement("afterend", document.createElement("div"));
// Prepend
document.querySelector("div").prepend(document.createElement("div"));
// insertBefore
document
  .querySelector("div")
  .insertBefore(document.createElement("div"), document.createElement("div"));
