function hand(callback){
    setTimeout(()=>{
        console.log('hand');
        callback();
    },5000);
}


function leg(){
    setTimeout(() => {
        console.log('leg');
    }, 2000);
}



hand(leg)