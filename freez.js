const obj = {
    age: 23
};

Object.freeze(obj);

obj.age = 33;
console.log(obj.age);