let people = [
  { name: 'Abi', age: 20, city: { place: 'Salem' } },
  { name: 'Bala', age: 22, city: { place: 'Coimbatore' } }
];
console.log(people[0].name);
console.log(people[1].city.place);
function printNames(...names) {
  console.log(names);
}
printNames('Sara', 'Kavi');
let x = [1];
let y = [2];
let z = [...x, ...y];
console.log(z);
let info = { name: 'Vijay', age: 25 };
let copyInfo = { ...info };
console.log(copyInfo);
function show({ name, age }) {
  console.log(name);
  console.log(age);
}
show({ name: 'Devi', age: 19 });