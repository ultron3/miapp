//not implemented
//fixme


import { InjectionToken, Injector } from "@angular/core";

const BASE_URL = new InjectionToken<string>('BaseUrl');
const injector =
    Injector.create({providers: [{provide: BASE_URL, useValue: 'https://www.unicredit.it/it/privati.html'}]});
const url = injector.get(BASE_URL);
// Note: since `BASE_URL` is `InjectionToken<string>`
// `url` is correctly inferred to be `string`
expect(url).toBe('https://www.unicredit.it/it/privati.html');
