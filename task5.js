let num = parseFloat(prompt("Enter a number:"));
if (num > 0) {
  console.log("Positive");
}

let number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let marks = parseInt(prompt("Enter marks:"));
if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else if (marks >= 0) {
  console.log("F");
} else {
  console.log("Invalid");
}

let day = parseInt(prompt("Enter day number (1-7):"));
switch (day) {
  case 1: console.log("Sun"); break;
  case 2: console.log("Mon"); break;
  case 3: console.log("Tue"); break;
  case 4: console.log("Wed"); break;
  case 5: console.log("Thu"); break;
  case 6: console.log("Fri"); break;
  case 7: console.log("Sat"); break;
  default: console.log("Invalid");
}