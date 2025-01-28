function loginUser(username){
    if (!username){
        console.log("Please input your username");
       return 
    }
    return `${username} is logged in`
}
// console.log(loginUser("sumon"))


function CalculationPrice(...num){  //here ... is the rest operator it stores data as an array it can be applied in cart system
    let sum = 0
   for(let i = 0; i<= num.length-1; i++){
    sum = sum + num[i]
   }
   return sum
}
let result = CalculationPrice(1,21,5)
// console.log(result);  //output 27


// How to pass an object to a function
const user = {
    name: "Sumon",
    price: 100,
}
function ObjectPassing(anyobject){
console.log(`user is ${anyobject.name} and price is ${anyobject.price}`);

}
ObjectPassing(user)

// Similarly We can pass Array 


