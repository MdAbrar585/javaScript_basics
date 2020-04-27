//parseFloat method
console.log("start of parseFloat()");

console.log(parseFloat("30"));
console.log(parseFloat("30.00"));
console.log(parseFloat("10.48"));
console.log(parseFloat("15 16"));
console.log(parseFloat(" 10 "));
console.log(parseFloat("28 years"));
console.log(parseFloat("years 28"));
console.log(parseFloat("0030"));
console.log(parseFloat('314e-2'));
console.log(parseFloat({ toString: function() { return "3.14" } }));
