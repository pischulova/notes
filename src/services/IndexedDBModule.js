const dbName = 'notesDB';

export default class IndexedDB {
	constructor() { 
	}

	openDb() {
		var instance = this,
				db, 
				noteObjStore,
				request = indexedDB.open(dbName, 1);

		return new Promise((resolve, reject) => {

			request.onerror = function() {
			  console.log('Database error: ' + this.errorCode);
			  reject();
			};
			request.onsuccess = function() {
			  instance.db = this.result;
			  resolve();
			};
			request.onupgradeneeded = function () { 
				db = this.result;  
	    		noteObjStore = db.createObjectStore('notes', { autoIncrement : true });

	    		var date = new Date().toISOString();

	    		var temp = [{
	    			title: 'Even working',
	    			text: 'Even working is a term used in book publishing that means the number of pages in a book is divisible by the number 16 or 32.[1] A book with 256, 272 or 288 pages, for instance, is an "even working", whilst a book with 254 or 286 pages is not. The significance of 16 or 32, which form the individual "signatures" of which a book is composed, is that they make the most efficient use of the paper used in the printing of a book.[1] If the number of printed pages in a book is, for example, 258, then the editor will attempt to move material from the two extra pages so that there will not be 14 blank pages at the end of the book (the next even working after 256 being 272 pages).',
	    			date: date
	    		}, {
					title: 'Weightlifting',
	    			text: "Weightlifting at the 1988 Summer Olympics – Men +110 kg. The men 60 kg weightlifting event was the heaviest events at the weightlifting competition of the 1988 Summer Olympics, with competitors required to have a minimum of 110 kilograms of body mass. The competition took place on September 29, and participants were divided in two groups. Each lifter performed in both the snatch and clean and jerk lifts, with the final score being the sum of the lifter's best result in each. The athlete received three attempts in each of the two lifts; the score for the lift was the heaviest weight successfully lifted.",
	    			date: date
	    		}, {
					title: 'Obannapalem, India',
	    			text: "Obannapalem is a Village in Naguluppalapadu, Mandal in Prakasam District of Andhra Pradesh State, India. It belongs to Andhra region . It is located 19 km towards North from District headquarters Ongole. 140 km from State capital Amaravathi. Obannapalem contains people with different castes. But majority of people came from Kamma community and having Polineni,Mandava and Katta surnames. It has nice ancient temples of Ramalayam and Hanuman which are restored. Apart from that there is Sivalayam. Obannapalem lies on near by Andhra Pradesh State Highway 214A and has connectivity to towns and cities through regular buses.This village is near to Naguluppalapadu.",
	    			date: date
	    		}, {
					title: 'Hilton',
	    			text: "Hilton is a village and civil parish in the county of Dorset in southern England. It is sited at an altitude of 135 metres in a small valley which drains chalk hills in the eastern part of the Dorset Downs. It lies within the North Dorset administrative district, approximately 8 miles (13 km) west-south-west of the town of Blandford Forum. The summit of Bulbarrow Hill (274 metres) is 1.5 miles (2.4 km) north of the village. In the 2011 census the parish—which includes the settlement of Ansty to the west—had 231 dwellings, 206 households and a population of 477. Hilton used to form a part of the estate of the nearby Milton Abbey when it was owned by the rich Hambro family; the Hambros, who often used to entertain Edward VII, planted woods on the surrounding hills, to provide cover for pheasants.[3] However the woods surrounding Hilton today are mostly post-war plantations of beech (Fagus sylvatica) and ash (Fraxinus excelsior) as the hills were cleared during WW2. Large areas are privately owned, although there are open access areas owned and managed by the Forestry Commission.",
	    			date: date
	    		}
	    		];
	    		temp.forEach((note) => {
	    			noteObjStore.add(note);
	    		});
			};

		})
	}

	// getObjectStore(store_name, mode) {
 //    	var tx = this.db.transaction(store_name, mode);
 //    	return tx.objectStore(store_name);
 //  	}
	
	getAllNotes() {
		var notesList = [],
			transaction = this.db.transaction('notes', 'readonly'),
			store = transaction.objectStore('notes');

		return new Promise((resolve) => {
			store.openCursor().onsuccess = function() {
			  	var current = this.result;
			  	if (current) {
			    	console.log(`Note ${current.key}: ${current.value.title}`);
			    	notesList.push(current.value);
			    	current.continue();
			  	}
			};

			transaction.oncomplete = function() {
				resolve(notesList);
			}
		});
	}

	createNote() {}
	updateNote() {}
	deleteNote() {}	
}