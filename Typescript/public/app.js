import { Invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { poptemplate } from "./classes/poptemplate.js";
//////////////////////////////////////////
// let one: formatter;
// let two: formatter;
// one = new Invoice("Brickerman", "payment for web development", 500);
// two = new payment("Vallejo", "payment for ui/ux design", 250);
// let always: formatter[] = [];
// always.push(one);
// always.push(two);
// console.log(always);
//////////////////////////////////////////
// interface Isperson {
//   name: string;
//   age: number;
//   isAlive: boolean;
//   speak(a: string): void;
//   spend(amount: number): number;
// }
// const personel: Isperson = {
//   name: "Tobi",
//   age: 28,
//   isAlive: true,
//   speak(a: string) {
//     console.log(a);
//   },
//   spend(amount: number) {
//     console.log("i spent  $", amount);
//     return amount;
//   },
// };
// console.log(personel);
// const greetPerson = (person: Isperson) => {
//   console.log(`Hello ${person.name}`);
// };
// greetPerson(personel);
///////////////////////////////////////////
// const invoice1 = new Invoice("John Doe", "payment for web development", 500);
// console.log(invoice1);
// let allInvoices: Invoice[] = [];
// allInvoices.push(invoice1);
// allInvoices.forEach((inv) => {
//   console.log(inv.format());
// });
///////////////////////////////////////////
const form = document.querySelector(".new-item-form");
console.log(form.children);
const inputs = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
/* pop template */
const ul = document.querySelector("ul");
const list = new poptemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let always;
    if (inputs.value === "invoice") {
        always = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        always = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(always, inputs.value, 'end');
});
//////////////////////////////////////
