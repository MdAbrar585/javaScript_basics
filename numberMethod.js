

//parseInt method
console.log("start of parseInt()");

console.log(parseInt("30"));
console.log(parseInt("30.00"));
console.log(parseInt("10.48"));
console.log(parseInt("15 16"));
console.log(parseInt(" 10 "));
console.log(parseInt("28 years"));
console.log(parseInt("years 28"));
console.log(parseInt("0030"));

//octal to decimal
console.log(parseInt("30",8));
//hexadecimal to decimal
console.log(parseInt("30",16));

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

