

const mySym = Symbol("key1")

const user1 = {
    name : "Rishikesh Padaval",
    "full name":"rishi vilas padaval",
    [mySym]: "mykey1",
    email: "Rushikeshpadaval@outlook.com",
    work: "web developer",
    age : 20,
    location: "kolhapur",
    isloggedin : false,
    lastlogindays: ["Saturaday","Sunday"]

}
console.log(user1.name);
console.log(user1["email"])
console.log(user1["full name"]);
console.log(user1[mySym]);
console.log(typeof user1);
