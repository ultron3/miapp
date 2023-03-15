import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/component/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));  //FIXME : da aggiornare



//chiamata localhost per mongodb
var headers = new Headers();
    headers.append("content-type","application/json");

fetch("mongodb://localhost:27017").then (response =>{

}).catch(error =>console.log("si è verificato un errore"))


