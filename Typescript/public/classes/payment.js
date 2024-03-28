export class payment {
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
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} will be given ${this.amount} as ${this.details}`;
    }
}
