export default class BaseView {
	constructor(template) {
		this.template = template;

		var div = document.createElement('div');
		div.innerHTML = template();
		document.body.appendChild(div);

		this.render();
	}
}