// let ans = confirm("is he good?");
// let nice = new Promise ((resolve,reject)=>{
//     if(ans == true){
//         resolve('promise kept')
//     }else{
//         reject('not kept')
//     }
// });

// nice.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// function createdata(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             reslove('data created')
//         }, 5000);
//     })
// }

// async function showdata(){
//     console.log("process started");
//     await createdata().then((res)=>{
//         console.log(res);
//     })
//     setTimeout(() => {
//         console.log("show data"); 
//      }, 2000);
 
// }


// showdata();





var a = ['rahul','rohit','ritvik'];
a.reverse();
console.log(a);