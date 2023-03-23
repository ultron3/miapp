import { Component } from '@angular/core'
import {Fingerprintjs} from './finger.enviroments'


Component({
    templateUrl:'./finger.component.html'

})

const fpPromise = Fingerprintjs.load({
  apikey:'api-kei',
  region:'eu'

})



fpPromise
then((fp: { get: () => any }) => fp.get())


function getFingerprint(obj: Record<string, unknown>): string {
  const sortedEntries = Object.entries(obj).sort(([key1], [key2]) => key1.localeCompare(key2));
  const concatenatedString = sortedEntries.map(([key, value]) => `${key}:${value}`).join(',');
  return `${obj.constructor.name}(${concatenatedString})`;
}


function then(arg0: (fp: { get: () => any} ) => any) {
  throw new Error('Function not implemented.')
}

