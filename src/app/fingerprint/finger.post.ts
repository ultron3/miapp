import {Fingerprintjs} from './finger.enviroments'


const fpPromise = Fingerprintjs.load({
  apikey:'api-kei',
  region:'eu'


})


async function postfingerprint(){
  console.log("success")
  return



}


postfingerprint()
