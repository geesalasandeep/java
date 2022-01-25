//changing first letter of a string to uppercase
var str = prompt("enter a string");
console.log(str);
var first = str.charAt(0);
console.log(first);
console.log(first.toUpperCase());
var rem = str.slice(1);
// console.log(rem);
var caps = first.toUpperCase() + rem;
console.log(`${caps}`);