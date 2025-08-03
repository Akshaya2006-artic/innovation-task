let nums1 = [5, 12, 8, 20];
let bigNums = nums1.filter(function(n) {
  return n > 10;
});
console.log('Filter:', bigNums);

let nums2 = [1, 2, 3];
let total = nums2.reduce(function(a, b) {
  return a + b;
});
console.log('Reduce (Sum):', total);

let fruits = ['apple', 'banana', 'mango'];
let partFruits = fruits.slice(0, 2);
console.log('Slice:', partFruits);
console.log('Original Fruits:', fruits);

let colors = ['red', 'blue', 'green'];
colors.splice(1, 1, 'yellow');
console.log('Splice:', colors);

let a = [1, 2];
let b = [3, 4];
let copied = [...a];
let joined = [...a, ...b];
console.log('Copied Array:', copied);
console.log('Joined Array:', joined);