
// var food = ["biryani","Ice Cream","Cool Drink","frenchfries"]

// console.log(food.find(frenchfries));


const ages = [4, 12, 16, 20];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}