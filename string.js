// get string length
console.log("get string length");
let str = "hello";
console.log(str.length);

// get lower case string
console.log("get lower case string");
let str1 = "HELLO";
console.log(str1.toLowerCase());

// get upper case string
console.log("get upper case string");

console.log(str.toUpperCase());

//include method
console.log("include method");

let str2 = "Hello I am a web developer";
console.log(str2.includes("developer"));
console.log(str2.includes("developers"));

//start and endWith method
console.log("start and endWith method");
console.log(str2.startsWith("Hello"));
console.log(str2.endsWith("per"));

//search method
console.log("search method");
console.log(str2.search("am"));
console.log(str2.search("piash"));

//match method
console.log("match method");
console.log(str2.match(/am/g));

//indexOf method
let str3 = "Hello I am a am web developer";

console.log(str3.indexOf('am'));
console.log(str3.lastIndexOf('am'));

//replace method
console.log("replace method");
let str4 = "Hello I am an  web an developer";
console.log(str4.replace('an','a'));
console.log(str4.replace(/an/g,'a'));//changed globally

//trim method 
console.log("trim method");
let str5 = "     Hello I am an  web an developer      ";
console.log(str5,str1);
console.log(str5.trim(),str1);
console.log(str5.trimStart(),str1);
console.log(str5.trimEnd(),str1);

//charAt method
let str6 = "Hello I am an  web an developer";
console.log("charAt method");
console.log(str6.charAt(8));
console.log(str6.charAt(800));
console.log(str6.charAt(8));


//charCode and fromCharCode method
console.log("charCode and fromCharCode method");
let a = String.fromCharCode(65);
console.log(a);


//concat string
let str7 = "Hello";
let str8 = " I am";
let str9 = " Abrar";

console.log(str7.concat(str8,str9));

//split method
console.log("");
let str10 = "A quick brown fox jumps over the wall";

console.log(str10.split(" "));//split where space

//repeat method

console.log(str5.repeat(3));


//slice method
console.log("slice method");
console.log(str10.slice(10,19));

//substr method
console.log("substr method");
console.log(str10.substr(10,3));
console.log(str10.substring(10,16));









