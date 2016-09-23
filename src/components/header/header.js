import Popup from '../popup/popup';

export default class Header {
	constructor() {
		var template = require("./header.handlebars");

		var header = document.createElement('header');
		header.innerHTML = template();
		header.className = 'container';
		document.body.appendChild(header);

		document.querySelector('.add-btn').addEventListener('click', newNotePopUp);
	}
}

function newNotePopUp(e) {
	var popup = new Popup();
	popup.render();
};