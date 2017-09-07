import { Component } from '@angular/core';

import {IonicPage, NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import {NotesService} from '../../services/notes.service';

/**
 * Generated class for the CreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-create',
	templateUrl: 'create.html',
})


export class CreatePage {
	note = {id: null, title: null, description: null};

	constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,public servicioNotas: NotesService) {
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad CreatePage');
	}


	public salir() {
		this.viewCtrl.dismiss();
	}

	public agregarNota(){
		this.note.id = Date.now();
		this.servicioNotas.addNote(this.note);
		this.navCtrl.pop();
	}

}
