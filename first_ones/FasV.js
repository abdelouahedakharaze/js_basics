// functions as variable or as parameter
// callBacks
function hier(a) {
  console.log("hay", a);
}

function host(param) {
  hier(param);
}

host("abdelouahed");
