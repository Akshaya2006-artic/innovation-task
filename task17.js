let a = { name: 'Ram' };
function hello() {
  console.log('Hello ' + this.name);
}
hello.call(a);
let b = { name: 'Lila' };
function hi(msg, sign) {
  console.log(msg + ' ' + this.name + sign);
}
hi.apply(b, ['Hi', '!']);
let c = { name: 'Kavi' };
function welcome() {
  console.log('Welcome ' + this.name);
}
let newFunc = welcome.bind(c);
newFunc();