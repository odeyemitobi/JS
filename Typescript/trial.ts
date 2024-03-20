const string = "Hello World Tobi";

console.log(string);

const inputs = document.querySelectorAll('input')

console.log(inputs);

inputs.forEach(input => {
	console.log(input);
});

let animals = ["cat", "dog"];
animals.push("lion");

console.log(animals);

let mixed = ["Tobi", 12, true]
mixed.push("dog", 12, false);
console.log(mixed);