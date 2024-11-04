// NaN not a number
let a = "hello";
let b = parseFloat(a);
console.log(b);
console.log("// ===== this is confusing too =======");
console.log(b == NaN); // <== gives False, anything==NaN is false
console.log(isNaN(b)); // use this instead
