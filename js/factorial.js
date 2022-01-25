var num = prompt('enter a number');
var fact = 1;
if (num == 0){
    console.log('the factorial of 0 is 1');

}else if(num < 0){
    console.log('the factorial of -ve numbers are not possible');
}else{
    for(var i=1; i<=num ; i++){
        // console.log(i);
        fact = fact * i;
    }
    console.log(`the factorial of ${num} is ${fact}`);

}