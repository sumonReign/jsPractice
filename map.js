
// We can use multiple map and filter togather 
let numArray = [1,2,3,4,5,6,7,8,9]
let newNum = numArray.map(num => num*2)
         .map(num => num + 2)
         .filter(num => num > 9)
console.log(newNum);
