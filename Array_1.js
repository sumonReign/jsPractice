// let bdHeroes = ["Shakib khan", "Rubel", "Jasim"]
// let indianHeroes = ["shahrukh khan", "Salman khan", "Amir khan"]
// let EnglishHeroes = ["Robert Downy Jr", "Iron man", "Batman"]
// let allheroes = bdHeroes.concat(indianHeroes) // merge all the elements of the both arrays

// let newAllHeroes = [...bdHeroes, ...EnglishHeroes, ...indianHeroes] // spread operator can merge two or more arrays but concate doesn't and most of the programmers use
// console.log(newAllHeroes);

let anotherArrayinArray = [1,2,3,4,5,[2,3,4,5,2,3,[5,45,65,454,343,4]]]
let newanotherArrayinArray = anotherArrayinArray.flat(Infinity) // merge all elements and inner arrays into a new single array
console.log(newanotherArrayinArray);

console.log(Array.isArray("HItesh"));
console.log(Array.isArray(newanotherArrayinArray));
console.log(Array.from("Sumon"));
console.log(Array.from({name: "Islam"})); // output an empty array

let score1 = 50
let score2 = 502
let score3 = 500
console.log(Array.of(score1, score2, score3)) // All variabe will form an Array






