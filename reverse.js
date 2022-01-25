// function reverseString(str){
//     let newString = "";
//     for (let i = str.length-1 ; i>= 0; i--){
//         newString += str[i];
//     }
//     return newString;


// }
// const string = prompt('enter a  string');

// const result = reverseString(string);
// console.log(result);

// program to reverse a string
function reverseString(str) {

    // return a new array of strings
    var arrayStr = str.split("");
   
    // reverse the new created array elements
    var reverseArr = arrayStr.reverse();
 
    // join all elements of the array into a string
    var joinArr = reverseArr.join("");
    
    // return the reversed string
    return joinArr;
}
 
// take input from the user
var string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result); 