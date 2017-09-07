import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesService } from '../services/notes.service';
import { DetailPage } from '../pages/detail/detail';
import { CreatePage } from '../pages/create/create';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Aqui se declaran todos los modulos compuestos en la aplicacion


export const firebaseConfig = {
  apiKey: "AIzaSyBlXPR6TGPXEsnkcOa7pEPP-FtNm539WII",
  authDomain: "miprimerappionic.firebaseapp.com",
  databaseURL: "https://miprimerappionic.firebaseio.com",
  storageBucket: "miprimerappionic.appspot.com",
  messagingSenderId: '741860504126'
};

@NgModule({
	//En las declaraciones van todas las paginas y componentes
	declarations: [
		MyApp,
		HomePage,
		DetailPage,
		CreatePage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule
	],
	bootstrap: [IonicApp],
	//Lo mismo que en declaraciones
	entryComponents: [
		MyApp,
		HomePage,
		DetailPage,
		CreatePage
	],
	//Aqui van todos los servicios que use la aplicacion
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		NotesService
	]
})


export class AppModule {}
