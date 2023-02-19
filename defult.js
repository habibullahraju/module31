function add(first = 0,second = 0) {
    const sum = first + second;
    return sum;
}
const result = add(10,20);
console.log(result);
function nameList(first,second = "") {
    const fullName = first + ' ' + second;
    return fullName;
}
const secondResult = nameList('raju','ahmed raju');
console.log(secondResult);