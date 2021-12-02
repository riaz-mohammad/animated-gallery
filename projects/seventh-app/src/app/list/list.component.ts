import { Component  } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styles: [
    `
     :host {
       display: block;
     }
     ul {
        padding: 0;
        margin: 0;
        display: flex;
        gap: 10px; 
        }
  `,
  ],
})
export class ListComponent {}