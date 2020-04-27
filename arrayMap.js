const numbers = [2,4,6,8];
const numbers1 = [2,4,6,8];
const result = [];
// use for loop
for(let i=0;i<numbers1.length;i++){
   const output = numbers1[i]*2;
   result.push(output);
       
}
console.log(result);
// use map
const multiply = numbers.map(x => x * 2);

console.log(multiply);