// lexical scope of this
var obj = {
  bar: function() {
    var innerX = (() => this);
    return innerX;
  }
};

var fn = obj.bar();

console.log(fn() === obj);

// as an object method
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
}

console.log(o.f());


// I want to confuse you
var o = {
  prop: 37
}

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f());

// more attempt to confuse
o.b = {
  g: independent,
  prop: 42
}

console.log(o.b.g());

// this on the object's prototype chain
var o = {
  f: function() {
    return this.a + this.b;
  }
}

var p = Object.create(o)

p.a = 1;
p.b = 2;

console.log(p.f());


