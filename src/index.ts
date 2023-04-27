import { Component } from "@angular/core";
import { social } from "./app/social";
import { android } from "android/global.androi";
import { ios } from "ios/global.ios";
import { Fingerprintjs } from "./app/fingerprint/finger.enviroments";
import { token } from "./token";

Component({
  templateUrl:'./index.html',
  styleUrls:['./style.css']
})
//esporto la classe token
new token();{

  
}






//esporto la classe social
social.homesocial();{
  console.log("fetch link")

}



//importo la classe android
new android();{


  console.log("versione android")

}
//importo la classe ios
new ios();{

  console.log("versione ios")

}
//importo la classe fingerprintjs
Fingerprintjs.load;{
  //not implemented
}




export class  currentDevice{
  device: any;
  token_device:any;

  software_android(){
    this.device ="huawei"
    if(this.device){
      console.log("error")

    }
    else{
      console.log("build completed")
    }
  }

}

