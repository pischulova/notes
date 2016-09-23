export default class Popup {
	constructor() {
	}

	render() {
		var template = require("./popup.handlebars");

		var div = document.createElement('div');
		div.innerHTML = template();
		div.className = 'popup';
		document.body.appendChild(div);

		document.querySelector('.exit').addEventListener('click', this.delete);
	}

	delete() {
		document.body.removeChild(document.querySelector('.popup'));
	}
}