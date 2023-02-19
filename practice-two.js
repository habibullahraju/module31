const myFunction = (arr)=>{
    const evenName = [];
   arr.forEach(element => {
    // console.log(element.length );
    if (element.length % 2 == 0) {
        evenName.push(element)
    }
   });
   return evenName;
}

const arr = ['habibullah', 'raju', 'jamil', 'kalam', 'tarek'];
const callFunction = myFunction(arr);
console.log(callFunction);