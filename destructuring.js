const person = {
    name:'habibullah',
    age: 20,
    address: 'bangladesh',
    pasion:'student'
}
const {name,age,address,pasion} = person;
// console.log(name,age,address, pasion);


const arr = [12,34,545,24,675];
const [first, second, third,] = arr;
// console.log(first, second, third);

const arrF = ()=> {
    return [12,43,654,765];
}
const [one,two,three,] = arrF();
console.log(two);