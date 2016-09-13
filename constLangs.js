const langs = ['JS', 'Ruby', 'Haskell'];
const [js, ...rest] = langs;

console.log(js);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]); // undefined
