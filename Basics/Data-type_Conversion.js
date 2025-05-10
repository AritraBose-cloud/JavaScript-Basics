let score = 13
// Without Inverted commas
console.log(typeof(score));// O/P = Number

score = "13"
//With Inverted commas
console.log(typeof(score));// O/P = String

//Converting data type
let score_no = Number(score)
console.log("After Conversion");
console.log(typeof(score_no));

let score2 = null
console.log(typeof score2);// O/P = object
let score_no1 = Number(score2)
console.log("After Conversion");
console.log(typeof(score_no1));
console.log("The Actual Value of null When converted to number");

console.log(score_no1);

let score3 = "33abx"
let score_no3 = Number(score3)
console.log(typeof(score_no3));
console.log(score_no3);

