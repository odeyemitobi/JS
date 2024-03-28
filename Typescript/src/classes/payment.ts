import { formatter } from "./../Interfaces/formatter.js";

export class payment implements formatter {
  /* first step */
  // client: string;
  // details: string;
  // amount: number;

  // constructor(client: string, details: string, amount: number) {
  //     this.client = client;
  //     this.details = details;
  //     this.amount = amount;
  // }

  /* second step */
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} will be given ${this.amount} as ${this.details}`;
  }
}
