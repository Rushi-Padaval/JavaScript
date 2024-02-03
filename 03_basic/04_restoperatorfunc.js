function buyingprice(num1){
    return num1
}
console.log(buyingprice(100,200,300,400));

//after the spred operator

function CalculatedCartPrice (...num1){
    return num1

}
console.log(CalculatedCartPrice(100,200,300));

function CalculatedCartPrice (val1, val2, ...num1){
    return num1
}
console.log(CalculatedCartPrice(100,200,300,400));