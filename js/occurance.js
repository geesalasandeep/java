//number of occurences of a letter in a string
var string = prompt("enter a string");
var letter = prompt("enter a letter");
var strLen = string.length;
var counter = 0;
for(var i = 0;i < strLen; i++){
    if(string[i] == letter){
        counter++;
    }
}
console.log(`${string} => ${letter} =>${counter}`);