const num = [1,2,435,8,5,36,9,5,3,5,87];
const large = (values) =>{
    let highest = 0;
    for (let i=0; i< values.length;i+=1){
        if (values[i] > highest){
            highest = values[i];
        }
    }
    return highest;
}
console.log(large(num));