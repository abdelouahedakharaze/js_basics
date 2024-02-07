let a = "1.4";
let b = 99;
console.log(parseFloat(a));
console.log(parseInt(a));
console.log(b.toString());
console.log(toString(b)); //wrong way

// ============
console.log("// ===== this is confusing =======");
let t = 1;
let v = "2";
console.log(t + v); // convert to a string then operate
console.log(v + t);
console.log(t - v); // convert to number then operate
console.log(v - t);
console.log("// ===== this is confusing too =======");
let g = 2;
let u = "2";
console.log(g == u); // convert to a string then operate
console.log(g === u); // to avoid conversion
