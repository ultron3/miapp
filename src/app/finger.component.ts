import {Fingerprintjs} from '@fingerprintjs/fingerprintjs-pro'

const fpPromise = Fingerprintjs.load({
  apikey:'api-kei',
  region:'eu'

})


fpPromise
.then((fp: { get: () => any }) => fp.get())
