// arrays methods

const MyArr = [0,1,2,3,4,5]

// MyArr.push(6)
// MyArr.pop()
// console.log(MyArr);

MyArr.unshift(9)
MyArr.shift()


console.log(MyArr.includes(9));
console.log(MyArr.indexOf(3))


console.log(MyArr);



const newArray = MyArr.join()
console.log(MyArr);
console.log(typeof newArray);