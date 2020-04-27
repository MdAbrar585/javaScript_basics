let a = 5.66;
console.log(Math.ceil(a));

console.log(Math.floor(a));
//round method
console.log(Math.round(a));
console.log(Math.round(4.49));
console.log(Math.round(4.56));

//trunc method
console.log(Math.trunc(13.37));
// expected output: 13

console.log(Math.trunc(42.84));
// expected output: 42

console.log(Math.trunc(0.123));
// expected output: 0

console.log(Math.trunc(-0.123));
// expected output: -0

//max method

console.log(Math.max(8,60,50,43,2));
// expected output: 60

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [8,60,50,43,2];

console.log(Math.max(...array1));
// expected output: 60

console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

const array2 = [2, 3, 1];

console.log(Math.min(...array2));
// expected output: 1

//sqrt method

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.414213562373095

console.log(Math.sqrt(1));  // 1
console.log(Math.sqrt(0));  // 0
console.log(Math.sqrt(-1)); // NaN
console.log(Math.sqrt(-0)); // -0

//cbrt method
console.log(Math.cbrt(-1));
// expected output: -1

console.log(Math.cbrt(1));
// expected output: 1

console.log(Math.cbrt(Infinity));
// expected output: Infinity

console.log(Math.cbrt(64));
// expected output: 4

//pow method

console.log(Math.pow(7, 3));
// expected output: 343

console.log(Math.pow(4, 0.5));
// expected output: 2

console.log(Math.pow(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// expected output: NaN

//random method

console.log(Math.floor(Math.random()*10)+1);
//abs method

console.log(Math.abs(5.25));
console.log(Math.abs(-5.25));
console.log(Math.abs(null));
console.log(Math.abs("Hello"));

//sine
console.log(Math.sin(0));           // 0
console.log(Math.sin(90));           // 0.8414709848078965
console.log(Math.sin(45));           // 0.8414709848078965


//cos
console.log(Math.cos(0));           // 1
console.log(Math.cos(1));           // 0.5403023058681398

console.log(Math.cos(Math.PI));     // -1
console.log(Math.cos(2 * Math.PI)); // 1

console.log(Math.sin(Math.PI / 2)); // 1

//exp method

console.log(Math.exp(0));
// expected output: 1

console.log(Math.exp(10));
// expected output: 22026.465794806718 (approximately)

console.log(Math.exp(-10));
// expected output: 0.00004539992976248485

console.log(Math.exp(12));
// expected output: 162754.79141900392