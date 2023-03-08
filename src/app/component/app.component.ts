import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miapp';
}


export class Mail  {
  later(email: string, after: any): boolean {
      console.log(`email ${email} in ${after} corso.`);
      return true;
  }
  send(email: string,after:any): boolean {
      console.log(`email  ${email} inviata ${after} correttamente attenda risposta. `);
      return true;
  }
  queue(email: string): boolean {
      console.log(`indirizzo email errato${email}.`);
      return true;
  }
}


export class Fingerprintjs {
  
}
