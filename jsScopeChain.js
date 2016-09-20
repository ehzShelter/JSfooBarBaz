a = 1;
var b = 2;

function f(z) {
  b = 3;
  c = 4;
  var d = 5;
  e = 6;


  function g() {

    console.log(this);
    var e = 0;
    d = 2 * d;
    return d;
  }

  return g();
  var e;
}

console.log(f(1));
