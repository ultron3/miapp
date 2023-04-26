import { Component } from "@angular/core";
import { social } from "./app/social";
import { android } from "android/global.androi";
import { ios } from "ios/global.ios";

Component({
  templateUrl:'./index.html',
  styleUrls:['./style.css']
})
//esporto la classe social
social.homesocial();{
  console.log("fetch link")

}

//https://bobbyhadz.com/blog/all-in-programming

//importo la classe android
new android();{
  console.log("versione android")

}
//importo la classe ios
new ios();{
  console.log("versione ios")

}


