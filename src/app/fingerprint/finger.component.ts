import { Component } from '@angular/core'
import {Fingerprintjs} from '@fingerprintjs/fingerprintjs-pro'


Component({
    templateUrl:'./finger.component.html',
    styleUrls:['./finger.component.css']
})

const fpPromise = Fingerprintjs.load({
  apikey:'api-kei',
  region:'eu'

})


fpPromise
.then((fp: { get: () => any }) => fp.get())
