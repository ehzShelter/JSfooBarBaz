var f = function(arg) {
  var c = 1;
  return function() {
    return c + arg;
  }
}

baz = f(7);
// c is context sensitive
// It remembers the environment where it was created
console.log(baz());
console.log(f(2)());

foo = f;
console.log(foo(10)());

bar = f();
// Nan
console.log(bar(44));

bam = f(44);
console.log(bam());

// IIFE
z = (function(arg) {
  var c = 1;
  return function() {
    return c + arg;
  }
})(99)

console.log(z());
