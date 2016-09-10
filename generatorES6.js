function* fibo() {
  let [prev, curr] = [0, 1];
  while(true) {
    yield curr;
    prev, curr] = [curr, prev + curr];
  }
}

var gen = fibo();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
