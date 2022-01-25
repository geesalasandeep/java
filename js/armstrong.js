var num = prompt('please enter number');
var temp = num;
var sum = 0;
while (temp>0){
    var digit = temp%10;    
    sum += digit ** 3;
    temp = parseInt(temp/10);

}
if(sum == num){
    console.log(`${num} is an arm number`);
}else{
    console.log(`${num} is not an arm number`);

}