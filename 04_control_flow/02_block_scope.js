// const score = 200

// if( score > 100){
//    const power = "fly"
//     console.log(`USER POWER IS : ${power}`);


// }
// console.log(`USER POWER IS : ${power}`);


const UserIsLoggedIn = true ;
const UserHaveDebitCard = true ;
const UserIsLoggedbyGoogle = true ;
const UserIsLoggedbyEmail = false ;

if (UserIsLoggedIn && UserHaveDebitCard ) {
    console.log("YOU CAN LOGIN");
}
    
    if (UserIsLoggedbyGoogle || UserIsLoggedbyEmail){
        console.log("YOU CAN LOGIN");
    }
    //