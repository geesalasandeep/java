var number = prompt("enter a positive number");
var count = 0;
for (var i = 1; i<= number ; i++){
    if(number % i == 0)
    count++;
}

if (count == 2){
    console.log(`${number} is a PRIME number`);
}else{
    console.log(`${number} is not a pirme number`);
}