function show(result) {
  console.log("Result is " + result);
}

function add(a, b, callback) {
  let c = a + b;
  callback(c);
}
add(1, 2, show);

function sayHello(name, next) {
  console.log("Hello " + name);
  next();
}

function sayBye() {
  console.log("Bye!");
}
sayHello("Meena", sayBye);

var word = "Hello";
console.log(word);

{
  let color = "Blue";
  const shape = "Square";
  console.log(color);
  console.log(shape);
}

function speak() {
  var sound = "Beep";
  console.log(sound);
}
speak();

{
  var fruit = "Apple";
}
console.log(fruit);

{
  let place = "Home";
  const city = "Chennai";
  console.log(place);
  console.log(city);
}