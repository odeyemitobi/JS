"use strict";
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
let user;
let userheight;
let isRegistered;
user = "Tobi";
userheight = 50;
isRegistered = false;
console.log(`User ${user} is ${!isRegistered ? "not" : ""} registered`);
////////////////////////////////////////////////////////////////
let information = [];
information.push("Name: Toby");
information.push("Age: 28");
console.log(information.join(", "));
////////////////////////////////////////////////////////////////
let mixture = [];
mixture.push("Tobi");
mixture.push(45);
console.log(mixture);
////////////////////////////////////////////////////////////////
let uid;
uid = "Tobi";
uid = false;
// Objects
let brii;
brii = {
    name: "Brii",
    age: 23,
    isAlive: true,
};
console.log(brii);
// Dynamic Types
let mandem;
mandem = "Tobi";
mandem = false;
mandem = { name: "Brii", age: 18 };
console.log(mandem);
mandem = {
    name: "Brian",
    age: 28,
    skill: "Running",
    education: "Graduate",
    isEmployed: false,
};
console.log(mandem);
////////////////////////////////////////////////////////////////
let dor = [];
dor.push("Tobi");
dor.push(4567);
dor.push({ name: "Dor" });
console.log(dor);
console.log("Who dae XD");
