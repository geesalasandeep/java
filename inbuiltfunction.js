//using string inbuilt functions 
//like string.includes() -- to check if one string can be found inside another string and returns true or false
//string.indexOf() -- returns the first index of occurence of a given value in the string or -1 if it is not present

var string = prompt("enter a string");
var subString =prompt("enter substring");
console.log(string);
var test1 = string.includes(subString);
console.log(test1);
var test2 = string.indexOf(subString);
console.log(test2);