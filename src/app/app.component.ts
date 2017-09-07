import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';



//Se utiliza como template lo propuesto por app.html en este caso como el proyecto esta en blanco (blank) no tiene nada
@Component({
	templateUrl: 'app.html'
})

/*
My app es una clase que enlaza la ruta principal de la aplicacion
En este caso HomePage que esta enlazada mas arriba a la carpeta de paginas
donde se encuentra precisamente Home.html

*/
export class MyApp {


	rootPage:any = HomePage;
	//El constructor se encarga de verificar que el dispositivo que esta utilizando o intentando acceder a la aplicacion se carge correctamente.
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		//Una vez cargado el dispositivo o plataforma, entonces se cargan los componentes
		platform.ready().then(() => {

			//La barra de estado se setea por default
			statusBar.styleDefault();
			//Se esconde la pantalla de bienvenida
			splashScreen.hide();
		});
	}







}

