
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/component/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './enviroment.prod';

if (environment.production) {
  enableProdMode();
}//La funzione enableProdMode() di Angular viene utilizzata per abilitare la modalità di produzione,
// che fornisce prestazioni migliori e migliora l'esperienza dell'utente.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


