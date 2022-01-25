let ans = confirm ('are you gifted to your gf?');
let gift = new Promise ((resolve,reject)=>{
    if (ans == true){
        resolve('promise is kept.....')
    }else{
        reject('promisefailed.....')
    }
});

gift.then((res) =>{
    console.log(res);
}).catch((err) => {
    console.log(err);
});