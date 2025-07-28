 const add = function(a, b) {
  return a + b;
};
console.log(add(1, 2));

const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(3, 1));

const addShort = (a, b) => a + b;
console.log(addShort(4, 2));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const greet = name => "Hi " + name;
console.log(greet("Meena"));

const isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(5));

const square = n => n * n;
console.log(square(3));