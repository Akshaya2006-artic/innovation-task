 function sum(x, y) {
  console.log("Add: " + (x + y));
}
function welcome(person) {
  console.log("Hello " + person);
}

function totalNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  console.log("Total: " + sum);
}

function multiplyItems(...items) {
  let result = 1;
  for (let i = 0; i < items.length; i++) {
    result = result * items[i];
  }
  console.log("Multiply: " + result);
}

sum(7, 3);
welcome("Akshaya");
totalNumbers(5, 15, 25);
multiplyItems(1, 4, 5);