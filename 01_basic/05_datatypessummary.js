 // primitive 

 // 7 types : string , number , boolean , null,  undefined , symbol BigInt


 // refrence (Non - primitive )

 // Array, Objects, Functions

const heros = ["IronMan","SuperMan","DR.Strange"];
let myObj = {
    name: "Rishi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}




// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "Rushipadval.com"

let anothername = myYoutubename
anothername = "its rishi"

console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "Rishi@gmail.com",
    id: "abc"
}
let userTwo = userOne 

userTwo.email = "rishipadaval@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

