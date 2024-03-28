import { Invoice } from "./classes/invoice.js";
const invoice1 = new Invoice("John Doe", "payment for web development", 500);
console.log(invoice1);
let allInvoices = [];
allInvoices.push(invoice1);
allInvoices.forEach((inv) => {
    console.log(inv.format());
});
const form = document.querySelector(".new-item-form");
console.log(form.children);
const inputs = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputs.value, tofrom.value, details.value, amount.valueAsNumber);
});
