import BaseView from '../BaseView';
import Popup from '../popup/popup';

export default class Header extends BaseView {
	constructor(parent) {
		super(parent);	
	}

	render() {
		document.querySelector('.add-btn').addEventListener('click', () => {
			var popup = new Popup(document.body);
		});
	}
}
