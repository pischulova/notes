import BaseView from '../BaseView';

export default class Popup extends BaseView {
	constructor() {
		super(require('./popup.handlebars'));
	}

	render() {
		document.querySelector('.exit').addEventListener('click', this.delete);
	}

	delete() {
		document.body.removeChild(document.querySelector('.popup').parentElement);
	}
}