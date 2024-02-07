const a = [1, 2, 4, 5, 4, 6];
a.forEach((e) => {
  console.log(e * 4);
});

const b = a.map((e) => {
  return e * 3; // dont forget return
});
console.log(b);
const n = a.find((x) => {
  return x > 3;
});
console.log(n);
const Question = a.some((q) => {
  return q > 99;
});
console.log(Question);
const Question2 = a.some((q) => {
  return q > 3;
});
console.log(Question2);
const Question3 = a.every((q) => {
  return q > 3;
});
console.log(Question3);
const Question4 = a.every((q) => {
  return q > 0;
});
console.log(Question4);
