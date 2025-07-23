let x = 1;
while (x <= 5) {
  console.log(x);
  x++;
}

let reply;
do {
  reply = prompt("Type ok:");
} while (reply !== "ok");
console.log("Done");

let n = parseInt(prompt("Enter a number:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum is", sum);

for (let i = 2; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
}