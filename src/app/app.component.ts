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
  later(email: string, after: number): boolean {
      console.log(`Send email to ${email} in ${after} ms.`);
      return true;
  }
  send(email: string,after:number): boolean {
      console.log(`Sent email to ${email} after ${after} ms. `);
      return true;
  }
  queue(email: string): boolean {
      console.log(`Queue an email to ${email}.`);
      return true;
  }
}
