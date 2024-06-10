// "use strict" // treat all js codes as ne wer version

// alert(3+3) // thsi will not eork coz we are using node js not browser..

// some primitive datatypes: int, string, boolean, null-> standalone value, symbol-> unique, undefined


// type conversion:
let score="fdghj";
console.log(typeof score);

let a=Number(score)
console.log(typeof a); 
console.log(a);// when score is string or undefined the value of a is NaN.
// when score is null then value of a is 0 

let isLoggedIn=1;

let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// when isLoggedIn=1 then booleanIsLoggedIn is true,
    // 0 then false 
    // "" then false
    // "sdfgh" the true



//operations in js

