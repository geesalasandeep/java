var a = prompt("enter a positive number: ");

if(a<0){
    console.log("its not a positive number");
}else if (a%2 == 0){
    console.log(`${a} is a EVEN Number`);
}else{
    console.log("its a ODD number");
}