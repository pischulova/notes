export default class BaseView {
	constructor(parent, content) {
		var className = this.constructor.name.toLowerCase(),
		    template = require(`./${className}/${className}.handlebars`);

		var div = document.createElement('div');
		div.innerHTML = template(content);
		parent.appendChild(div);

		this.render();
	}
}