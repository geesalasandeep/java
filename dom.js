document.write('welcome');

// var ele = document.createElement('h1');
// document.body.append(ele);
// // ele.innerText = 'inner text';
// // ele.textContent = 'text content';

// // ele.innerHTML = '<a href="#">google</a>';
// // setInterval(() => {
// //     var time = new Date();
// //     ele.innerText = time;
    
// // }, );

// // setInterval(() => {
// //     var time = new Date();
// //     ele.innerText = time;
    
// // },11 );

var b = Array.from( document.getElementsByClassName('select'));
b.forEach(changecolor);
function changecolor (ele){
    ele.style.color="blue";
}



// // var b = Array.from( document.getElementsByClassName('select'));
// // b.forEach(changecolor);
// // function changecolor(ele){
// //     setInterval(() => {
// //         var x = Math.random();
// //         if (x>0 && x<0.25){
// //             ele.style.color = "green";
// //         }
// //         else  if (x>0.25 && x<0.5){
// //             ele.style.color = "red";
// //         }
// //         else  if (x>5 && x<0.75){
// //             ele.style.color = "blue";
// //         }
// //         else {
// //             ele.style.color = "yellow";

// //         }

// //     }, 11);
// // }



// var b = Array.from(document.getElementsByTagName('div'));
// // console.log(b);

// b.forEach((ele) => {
//     ele.innerText = "division Tags"
// });

//query selector

var queryele = document.querySelector('div');
console.log(queryele);

// queryele.style.color = "yellow"


queryele.innerHTML = 'hello';
// var queryels = document.querySelectorAll('div');
// console.log(queryels);

// queryels.forEach((ele)=>{
//     ele.style.color= 'hotpink';
// })




