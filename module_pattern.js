myAccesors = (() => {
  var data = 'interesting Data';

  // implementation
  var getter = (() => console.log(data))
  var setter = ((val) => data = val)

  // interface
  return {
    getter: getter,
    setter: setter
  }
})()

console.log(myAccesors.data);
myAccesors.getter();
myAccesors.setter("New module pattern!!");
myAccesors.getter();
