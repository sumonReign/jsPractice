let mySym = Symbol("sym1")

let jsUser = {
    name: "Sumon",
    Age: 18,
    Location: "Dhaka",
    isLoggedIn: false,
    [mySym]: "mySym1",
    "full name": "Sumon Islam"

}
// console.log(jsUser[mySym]);// square for symbol
console.log(jsUser["full name"]); //here square is used to print multiple word keys value within an object
jsUser.email = "sumon@google.com"
// Object.freeze(jsUser)//will not permit to change the object's value
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("My name is Sumon");
    
}
jsUser.greetingTwo = function(){
    console.log(`my full name is ${[this["full name"]]}`)
}


console.log(jsUser.greetingTwo());



