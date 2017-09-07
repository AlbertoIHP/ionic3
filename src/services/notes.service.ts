import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class NotesService{

	constructor(public afDB: AngularFireDatabase){

	}


	notes = [];


	public getNotes(){
	//return this.notes;
	return this.afDB.list('notas/');
	}

	 public getNote(id){
	//Filter es un metodo de array en JS que en una sola linea permite buscar un elemento
	/*return this.notes.filter(function(elemento, indice){
		return elemento.id == id
	})[0] || {id:null,title:null,description:null};*/

	return this.afDB.object('notas/'+id);
	}

	public addNote(note){
		//this.notes.push(note);
		this.afDB.database.ref('notas/'+note.id).set(note);
	}


	public setNote(note){
		/*for(let i = 0; i < this.notes.length; i++){
			if(this.notes[i].id == note.id){
				this.notes[i] = note;
			}
		}*/
		this.afDB.database.ref('notas/'+note.id).set(note);
	}


	public deleteNote(id){

	/*for(let i = 0; i < this.notes.length; i++){
			if(this.notes[i].id == id){
				//splice elimina el elemento recibiendo el indice y el numero de elementos
				this.notes.splice(i,1);
			}
		}*/

		this.afDB.database.ref('notas/'+id).remove();
	}
}
