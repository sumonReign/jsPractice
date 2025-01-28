const room1 = {
    person1: "Sumon",
    Age: 18
}
const room2 = {
    person2: "Sobuj",
    Age2: 28
}

// const allRoom = Object.assign({},room1,room2) //assign all the members into a new object but less use
const allRoom = {...room1, ...room2} // freequently usable and fast
// console.log(allRoom);
console.log(Object.keys(room1)); // return the keys as an array
console.log(Object.values(room1)); // return the values as an array
console.log(allRoom.hasOwnProperty("Age2"));

