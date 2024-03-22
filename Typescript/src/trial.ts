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

// Arrow function
let cruiser = () => {
  console.log("Hello, Brii");
}

cruiser()

let eni: Function;
eni = (a: number, b: number, c: number | string = 15) => {
  console.log(a + b);
  console.log(c);
}

eni(12, 10);


let sumup = (a: number, b: number) => {
  return a * b;
}

let addup = sumup(2, 8);
console.log(addup);

////////////////////////////////////////////////////////////////
/* Type Aliases */
type Aliases = number | string | boolean;
type OurNames = { name: Aliases, aliases: Aliases };

const Details = (names: OurNames) => {
  console.log(`${names.name} is a good ${names.aliases}`);
}

Details({ name: "Tobi", aliases: "Programmer" });

////////////////////////////////////////////////////////////////
/* function signature */
let informant: (n: string, m: string) => void;
informant = (x: string, y: string) => {
  console.log(`${x} says ${y}`);
};

informant("Tobi", "Hello");

/* signature 2 */
let maths: (one: number, two: number, three: string) => number;

maths = (numOne: number, numTwo: number, numThree: string) => {
  if (numThree === "+") {
    return numOne + numTwo;
  } else if (numThree === "-") {
    return numOne - numTwo;
  } else if (numThree === "*") {
    return numOne * numTwo;
  } else if (numThree === "/") {
    return numOne / numTwo;
  } else {
    return NaN;
  }
}

console.log(maths(2, 3, "/"));

/* signature 3 */
let logger: (entry: { user: string, age: number }) => void;

type Human = {user: string, age: number};

logger = (putin: Human) => {
  console.log(`${putin.user} is ${putin.age} years old`);
}

logger({ user: "Tobi", age: 23 });