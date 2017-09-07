//Se importa la plataforma dinamica y ademas la aplicacion en si y se cargan
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
