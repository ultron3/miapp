import { InjectionToken, Injector } from "@angular/core";

const BASE_URL = new InjectionToken<string>('BaseUrl');
const injector =
    Injector.create({providers: [{provide: BASE_URL, useValue: 'http://localhost:4200'}]});
const url = injector.get(BASE_URL);
// Note: since `BASE_URL` is `InjectionToken<string>`
// `url` is correctly inferred to be `string`
expect(url).toBe('http://localhost:4200');

export class token{
 
  access_token: any;
  refresh_token:any;

  setup_token(){
    this.access_token = true
    this.refresh_token = false



  }
}
