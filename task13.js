let person = {
  name: "Anu",
  age: 20
};

let { name, age } = person;
console.log(name);
console.log(age);

let student = {
  firstName: "Ravi"
};

let { firstName, lastName = "Kumar" } = student;
console.log(firstName);
console.log(lastName);

let user = {
  userName: "Sita",
  location: {
    city: "Madurai",
    code: 625001
  }
};

let { userName, location: { city, code } } = user;
console.log(userName);
console.log(city);
console.log(code);

let mobile = {
  brand: "Nokia",
  model: "3310"
};

let newMobile = { ...mobile };
console.log(newMobile);

let a = { x: 1 };
let b = { y: 2 };

let combined = { ...a, ...b };
console.log(combined);