let items = [
  { id: 1, name: "Pen", price: 10, quantity: 2 },
  { id: 2, name: "Notebook", price: 40, quantity: 0 },
  { id: 3, name: "Bag", price: 250, quantity: 1 },
  { id: 4, name: "Pencil", price: 5, quantity: 4 }
];

let availableItems = items.filter(function(item) {
  return item.quantity > 0;
});
console.log(availableItems);

let total = availableItems.reduce(function(sum, item) {
  return sum + item.price * item.quantity;
}, 0);
console.log("Total value:", total);

let someItems = items.slice(0, 2);
console.log(someItems);

items.splice(1, 1);
console.log(items);

let newItems = [...items];
newItems.push({ id: 5, name: "Eraser", price: 3, quantity: 2 });
console.log(newItems);

let product = {
  id: 6,
  name: "Marker",
  price: 20,
  quantity: 3,
  show: function() {
    console.log("Name:", this.name);
    console.log("Price:", this.price);
    console.log("Quantity:", this.quantity);
  }
};

product.show();

let { name, price, quantity } = product;
console.log(name);
console.log(price);
console.log(quantity);