import BaseView from '../BaseView';
import Popup from '../popup/popup';

export default class Header extends BaseView {
	constructor() {
		super(require('./header.handlebars'));	
	}

	render() {
		document.querySelector('.add-btn').addEventListener('click', () => {
			var popup = new Popup();
		});
	}
}
