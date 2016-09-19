// function Person(saying) {
//   this.saying = saying;
//   return {
//     talk: function() {
//       console.log("I am returning saying: ", this.saying);
//     }
//   }
// }
//
function Person(saying) {
  return {
    talk: function() {
      console.log("I am returning saying: ", saying);
    }
  }
}

// function Pseudonew(constructor) {
//   var obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype);
//   var argsArray = Array.prototype.slice.apply(arguments);
//   constructor.apply(obj, argsArray.slice(1));
//   return constructor.apply(Obj, argsArray.slice(1)) || obj;
// }

// Person.prototype.talk = function() {
//   console.log("I say: ", this.saying);
// }



// var Crockford = Pseudonew(Person, "Semicolan Semicolon!!! shit...")
var Crockford = new Person("Semicolan Semicolon!!! shit...");

Crockford.talk();
