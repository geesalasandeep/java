// // fetch ('https://api.github.com/users').then ((res)=>{
// //     res.json().then((data) =>{
// //         console.log(data);
// //         console.log(data[0].type);

// //     });
// // });



var car = {
    color : 'white',
    brand : 'audi',
    model : 2021
}

// var store = JSON.stringify(car);
// console.log(store);
// // console.log(typeof store);
// localStorage.setItem('car',store);

// // var res = localStorage.getItem('car');

// var res =JSON.parse(localStorage.getItem('car'))
// console.log(res);

// // localStorage.removeItem('car');


sessionStorage.setItem('car',JSON.stringify(car));


console.log(JSON.parse(sessionStorage.getItem('car')));

// let bike = {
//     brand : 'bajaj',
//     version : 'NS200',
//     color : 'Blue'
// }
// console.log(bike);

// let bike2 = bike;
// console.log(bike2);
// bike2.version = 'RS200';
// bike2.color = 'red';
// console.log(bike2);
// console.log(bike);














