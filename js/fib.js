// var n1 = 0;
// var n2 = 1;
// var sum;
// var f;
// var number=8
// console.log('fib : ');
// for (f = 1 ; f<=number; f++){
//     console.log(n1);
//     sum = n+m;
//     console.log(sum);
    
const fib = (n) => {
    const fibarray = [0,1];
for(var i = 2; i<n; i++){
fibarray.push(fibarray[i-2]+fibarray[i-1]);
}
return fibarray;
}
console.log(fib(10));
