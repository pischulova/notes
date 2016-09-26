import BaseView from '../BaseView';

export default class NoteContainer extends BaseView {
	constructor(parent, content) {
		super(parent, {hello: 'hurray!', notes: content});	
	}

	render() {
	}
}
