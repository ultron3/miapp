import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "mongodb://localhost:27017",
  storageBucket: "",
  messagingSenderId: ""
};
