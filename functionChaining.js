function one(){
    console.log('one');
}
function two(){
    console.log('two');
    return one;
}
function three(){
    console.log('three');
    return two;
}

// var abc = three();
// var xyz = abc();
// xyz();

three()()(); 