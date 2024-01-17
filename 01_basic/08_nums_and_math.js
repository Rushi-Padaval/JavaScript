const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);


console.log(balance.toString());
console.log(balance.toFixed(3));


const otherNumber = 13.899
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds);
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.round(4.6))
console.log(Math.ceil(4.9));
console.log(Math.floor(6.8));



const url = "https://Rushikeshpadaval.google.com"

console.log(url.replace(`google`,`yahoo`));
console.log(url.includes('Rushi'));




// *****************  Mathamatics ****************




console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (min - max + 1))+ min )