/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var izzy: ToDoList.IPerson = {
    name: "Izzy G",
    email: "izzy@epicodus.com"
  }

  var ramon: ToDoList.IPerson = {
    name: "Ramon dlC",
    email: "ramon@epicodus.com",
    phone: "555-666-7777"
  }

  export var people = {
    "diane": diane,
    "izzy": izzy,
    "ramon": ramon
  };

}
