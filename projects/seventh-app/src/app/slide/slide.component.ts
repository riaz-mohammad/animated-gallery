import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  template: `
    <h2>
      <ng-content></ng-content>
    </h2>
  `,
  styles: [
    `
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.712);
        color: white;
        font-weight: bold;
      }
    `,
  ],
})
export class SlideComponent {}



