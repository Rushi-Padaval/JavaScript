function rushi() {
    console.log("HEY RUSHIKESH");
}

// immeditely invoked function expression 

(function rushi() {
    console.log( ` HEY RUSHIKESH`);
})();   // after one function to print the another function we need to add ; paranthesis to end


(() => {
    console.log(`HEY RUSHIKESH PADAVAL`)
})()