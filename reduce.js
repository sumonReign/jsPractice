let myNum = [1,2,3,4]
let total = myNum.reduce((acc,currval) => acc+currval, 0)
console.log(total);


// real life problem with reduce method
let shopingCart = [
    {
        course: "js",
        price: 5000,
    },
    {
        course: "Java",
        price: 6000,
    },
    {
        course: "Wordpress Development",
        price: 3000,
    },
    {
        course: "Mobile app development",
        price: 4000,
    },
    {
        course: "Pyhthon",
        price: 1000,
    },
]

let totalPrice  = 0
let finalTotalPrice = shopingCart.reduce((totalPrice, currval) => totalPrice + currval.price, 0) // dont forget to put acc value
