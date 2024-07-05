function myFunction(name) {
  console.log(`Hi, ${name}!`);
}
const myObject = {
  myMethod: function () {
    myFunction(this.name);
  },
  name: "Иван",
};
myObject.myMethod();
