let arrow_sum = (a, b) => {
  return a + b;
};
x = arrow_sum(4, 5);
console.log(x);

let guester = (guest) => {
  console.log("hiiiii M : ", guest);
};
guester("abelouahed");
// if it has only one line reurn , it can be written in one line
let hier = (guest) => "hi " + guest;
//// like that
console.log(hier("abdelouaehd"));
/// if it takes no param
let arrow_no_param = () => console.log("LoOk  At Me i have no param ");
arrow_no_param();
