export class Invoice {
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
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} will give ${this.amount} as ${this.details}`;
  }
}
