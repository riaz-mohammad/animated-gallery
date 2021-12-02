import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  template: ` <li><ng-content></ng-content></li> `,
  styles: [
    `
      li {
        list-style-type: none;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        background-color: rgba(255, 255, 255, 0.315);
        text-align: center;
        cursor: pointer;
      }
    `,
  ],
})
export class ItemComponent {}