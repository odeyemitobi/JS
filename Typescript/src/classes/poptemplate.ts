import { formatter } from "../Interfaces/formatter.js";

export class poptemplate {
	constructor(private container: HTMLUListElement) { }

	render(item: formatter, header: string, pos: 'start' | 'end') {
		const li = document.createElement('li');

		const h4 = document.createElement('h4');
		h4.innerText = header;
		li.append(h4);

		const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
	}
}