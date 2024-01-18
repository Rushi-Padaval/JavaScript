let newDate = new Date("2024,01,01")
console.log(newDate);
// console.log(myCreatedDate.getHours());
// console.log(myCreatedDate.getDay());

// `The Day Is ${myCreatedDate.getDay()} ` 


newDate.toLocaleString(`default`,{
    weekday:"long",
    
})