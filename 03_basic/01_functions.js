function myname() {
    console.log("R");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");
    
}
// myname()

function addTwoNumbers (Number1,Number2){
    console.log(Number1+Number2)
}

const result = addTwoNumbers(4,1)
console.log("Result: ", result);



function loginUserMessage (username){
    return `${username} justLoggedin `
}
console.log(loginUserMessage ("rushikesh"))


// if condition 
function loginUsername (username){
    if(username===undefined){
        console.log("Please Enter The Username ");
    return
    }
    
    return `${username} justLoggedin `
}
console.log(loginUsername());