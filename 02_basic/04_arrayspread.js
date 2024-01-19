const marvelHeros = ["Spiderman","Ironman ","AbC"]
const dcHeros = ["Badman","Joker","Flash"]


const AllHeros = [...marvelHeros, ...dcHeros]
console.log(AllHeros);

const realArray = [ [ 1, 2, 2 , [ 6, 7, 8 ],  [ 8,  8,  9]  ]]
const newArray = realArray.flat(Infinity)
console.log(newArray);


console.log(Array.isArray("rishi"));
console.log(Array.from("rishi"));

console.log(Array.from({name : "rishi"})) //intersting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));