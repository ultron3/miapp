import {Fingerprintjs} from './finger.enviroments'
import { ReflectiveInjector } from '@angular/core';
const fpPromise = Fingerprintjs.load({
  apikey:'api-kei',
  region:'eu'


})

let injector = ReflectiveInjector.resolveAndCreate([
  { provide: "api-kei", useValue: 'XYZ1234ABC' }
]);

let apikey = injector.get("api-kei");
console.log(apikey); // "XYZ1234ABC"
let region=injector.get('eu');
console.log(region)

async function postfingerprint(){
  console.log("success")
  return



}


postfingerprint()
