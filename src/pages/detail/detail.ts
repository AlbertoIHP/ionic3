import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotesService} from '../../services/notes.service';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail',
	templateUrl: 'detail.html',
})


export class DetailPage {

	note = {id:null,title:null,description:null};
	id = null;

	constructor(public navCtrl: NavController, public navParams: NavParams, public notesService: NotesService) {
		//navParams permite obtener informacion transmitida entre vistas, de esta manera, ID que fue enviada desde la vista HOME llega a la vista DETAIL mediante navParams
		this.id = navParams.get('id');
		//this.note = notesService.getNote(this.id);


		//Se formatean los datos
		notesService.getNote(this.id).subscribe(note=>{this.note=note;});

	}

	public guardarCambios(){
		this.notesService.setNote(this.note);
		this.navCtrl.pop();
	}

}
