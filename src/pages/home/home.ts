import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { DetailPage } from '../detail/detail';

import { ActionSheetController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

import { CreatePage } from '../create/create';
import { AlertController } from 'ionic-angular';



//Se definen los componentes, en este caso el template y el selector
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


//La clase HomePage sirve para definir variables y metodos a utilizar por el HTML
export class HomePage {
	notes = [];



	@ViewChild('myNav') nav: NavController;

	//El constructor de esta funcionalidad define un navCtrl para poder navegar entre vistas, y en est ecaso nuestro servicio de ntoas para acceder a las mismas y mostrarlas en la vista
	constructor(public alertCtrl: AlertController, public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public notesService: NotesService) {

		//El servicio de notas tiene un metodo que permite obtener todas las notas, y asi asignarlas a nuestra variable local, de nuestro TS para nuestra pagina home HTML
		//this.notes = notesService.getNotes();


		//Se reciben las notas y se formatean para mostarlas
		notesService.getNotes().subscribe(notas =>{
			this.notes = notas;
		});
	}

	public createNote(){
	let modal = this.modalCtrl.create(CreatePage);
	modal.present();
	}




	public goToDetail(id) 
	{
			   let actionSheet = this.actionSheetCtrl.create({
				 title: 'Acciones sobre la nota '+id,
				 buttons: [
				   {
					 text: 'Editar',
					 handler: () => {
					   this.navCtrl.push(DetailPage, {id:id});
					 }
				   },
				   {
					 text: 'Eliminar',
					 role: 'destructive',
					 handler: () => {
					   this.showAlert(id);
					 }
				   }

				 ]
			   });

			   actionSheet.present();
	}


	public showAlert(id) 
	{

		this.notesService.deleteNote(id);

		let alert = this.alertCtrl.create({
		  subTitle:  'Nota '+id+' eliminada exitosamente',
		  buttons: ['Aceptar']
		});
		alert.present();
	}

}



