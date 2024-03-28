import { Invoice } from "./classes/invoice.js";

const invoice1 = new Invoice("John Doe", "payment for web development", 500);
console.log(invoice1);

let allInvoices: Invoice[] = [];
allInvoices.push(invoice1);

allInvoices.forEach((inv) => {
  console.log(inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const inputs = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(inputs.value, tofrom.value, details.value, amount.valueAsNumber);
});
