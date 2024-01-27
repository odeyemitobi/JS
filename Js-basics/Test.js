var human = {
  name: "Toby",
  age: 21
};

human.name = "Bricker"
console.log(human)


// function that performs a task
function greet(name, lastName) {
  console.log("Hello, " + name + " " + lastName,"!");
}

greet("Toby", "Odeyemi");
greet("Bricker", "Odeyemi");


// function that calculates a value
function square(number) {
  return number * number;
}

console.log(square(10));
