import BaseView from '../BaseView';

export default class Popup extends BaseView {
	constructor(parent) {
		super(parent);
	}

	render() {
		document.querySelector('.exit').addEventListener('click', this.delete);
	}

	delete() {
		document.body.removeChild(document.querySelector('.popup').parentElement);
	}
}