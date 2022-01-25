//dispalying armstrong numbers between given range
var a = prompt("enter lower number");
var b = prompt("enter upper number");
for(var i = a;i<=b;i++){
    var temp = i;
    var noOfDigits = i.toString().length;
    var sum = 0;
    while(temp >0){
        var digit = temp%10;
        temp = parseInt(temp/10);
        sum += digit ** noOfDigits;
    }
    if(sum == i){
        console.log(i);
    }
}