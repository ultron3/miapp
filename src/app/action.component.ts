import { Component } from '@angular/core';
import { ActionBarService } from 'my-ui-library';

@Component({
  selector: 'miapp',
  template: `
    <h1>Il mio componente</h1>
    <div>
      <my-action-bar>
        <button (click)="handleClick()">Pulsante dell'action bar</button>
      </my-action-bar>
    </div>
  `,
})
export class MyComponent {
  constructor(private actionBarService: ActionBarService) {}

  handleClick() {
    // gestisci il clic del pulsante dell'action bar qui
  }
}
