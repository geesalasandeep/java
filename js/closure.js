
function abc(){
    console.log("ab1");
}

function bcd(){
    console.log("ab2");
    return abc;
}


function cde(){
    console.log("ab3");
    return bcd;
}

function def(){   
    console.log("ab4");
    return cde;
}

def()()()();
