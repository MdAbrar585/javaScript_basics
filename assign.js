const myName = {name:"Piash", age:21};
const changeName = {name:"Abrar", age:24};

const changeObject = Object.assign(myName, changeName);

console.log(myName);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(changeName);
// expected output: Object { a: 1, b: 4, c: 5 }