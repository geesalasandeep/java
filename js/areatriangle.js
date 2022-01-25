var a = parseInt(prompt('enter a value'));
var b = parseInt(prompt('enter b value'));
var c = parseInt(prompt('enter c value'));

var s = (a+b+c)/2;
console.log(s);
var area = s*(s-a)*(s-b)*(s-c);
var result = Math.sqrt(area)
console.log(result);

