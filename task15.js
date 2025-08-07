let fruits = ['Apple', 'Banana'];
console.log(fruits[0]);
console.log(fruits[1]);
let student = { name: 'Anu', age: 15 };
console.log(student.name);
console.log(student['age']);
let place = { city: { name: 'Chennai' } };
console.log(place.city.name);
let car = { brand: 'Tata', model: 'Nexon' };
for (let key in car) {
  console.log(key);
  console.log(car[key]);
}