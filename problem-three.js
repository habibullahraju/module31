const calculation = (arr)=> {
    let sum = 0;
    arr.forEach(element => {
       const x =  Math.pow(element,2);
       sum = sum + x;
       
    });
    const avarage = sum / 6;
    return avarage
}
const arr = [12,44,43,75,45,86];
const result = calculation(arr);
console.log(result);