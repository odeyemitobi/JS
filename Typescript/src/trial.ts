const string = "Hello World Tobi";

console.log(string);

const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

// Arrays
let animals = ["cat", "dog"];
animals.push("lion");

console.log(animals);

let mixed = ["Tobi", 12, true];
mixed.push("dog", 12, false);
console.log(mixed);

//Objects
let info = {
  name: "Tobi",
  age: 23,
  isAlive: true,
};
console.log(info);

////////////////////////////////////////////////////////////////
let user: string;
let userheight: number;
let isRegistered: boolean;

user = "Tobi";
userheight = 50;
isRegistered = false;

console.log(`User ${user} is ${!isRegistered ? "not" : ""} registered`);

////////////////////////////////////////////////////////////////
let information: string[] = [];
information.push("Name: Toby");
information.push("Age: 28");

console.log(information.join(", "));

////////////////////////////////////////////////////////////////
let mixture: (string | number)[] = [];

mixture.push("Tobi");
mixture.push(45);

console.log(mixture);

////////////////////////////////////////////////////////////////
let uid: string | boolean;

uid = "Tobi";
uid = false;


// Objects

let brii: {
  name: string,
  age: number,
  isAlive: boolean,
};


brii = {
  name: "Brii",
  age: 23,
  isAlive: true,
};

console.log(brii);


// Dynamic Types

let mandem: any;

mandem = "Tobi";
mandem = false;
mandem = {name: "Brii", age: 18};

console.log(mandem);

mandem = {
  name: "Brian",
  age: 28,
  skill: "Running",
  education: "Graduate",
  isEmployed: false,
}

console.log(mandem);

////////////////////////////////////////////////////////////////
let dor: any[] = [];

dor.push("Tobi");
dor.push(4567);
dor.push({name: "Dor"});

console.log(dor);
console.log("Who dae XD");