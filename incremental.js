function* foo() {
  let index = 0;
  while (index <= 2) {
    yield index++;
  }
}

var iterator = foo();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
