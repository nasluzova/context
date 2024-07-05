const person = {
  name: "Иван",
};
function changeName(newName) {
  person["name"] = newName;
}
changeName("Петр");
console.log(person);
