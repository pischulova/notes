import Header from './view/header/Header';
import NoteContainer from './view/notecontainer/NoteContainer';
import IndexedDB from './services/IndexedDBModule';

var header = new Header(document.body);

var indexedDB = new IndexedDB(),
	notes, 
	noteContainer,
	openedDB = indexedDB.openDb();

	openedDB.then(() => {
		return indexedDB.getAllNotes();})
	.then((notes) => {
		noteContainer = new NoteContainer(document.body, notes);
	});


