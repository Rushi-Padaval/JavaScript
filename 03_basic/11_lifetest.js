function rushi() {
    console.log("HEY RUSHIKESH");
}

// immeditely invoked function expression 

(function rushi() {
    console.log( ` HEY RUSHIKESH`);
})();   // after one function to print the another function we need to add ; paranthesis to end


((name) => {
    console.log(`RUSHIKESH PADAVAL ${name}`)
})(`hey`)



((name) =>
    {
        console.log(`RUSHIKESH ${name}`);

})(`RUSHI`)



