function calldad(calldarling){
    setTimeout(() => {
        console.log('call dad');
        calldarling();
    }, 2000);
}



function callmom(callgagan){
    setTimeout(() => {
        console.log('call mom');
        callgagan();
    }, 1000);
}


function calldarling(callmom){
    setTimeout(() => {
        console.log('darling');
        callmom();
    }, 2000);
}


function callgagan(callanshu){
    setTimeout(() => {
        console.log('gagan sir');
        callanshu();
    }, 2000);
}


function callanshu(){
    
    setTimeout(() => {
        console.log('anshu sir');
    }, 2000);
}

calldad(calldarling)





// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }

// function opt(a,b,opt,opt2,opt3){
//     var x = opt(a,b);
//     var y = opt2(a,b);
//     var z = opt3(a,b);
//     return[x,y,z];
// };

// var result = opt(10,20,sub,mul,add);
// console.log(result);




 
