import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow',
  template: ` <button></button> `,
  styles: [
    `
     :host {
       display: block;
       width: 50px;
       height: 40px;
     }
     button {
       display: inline-block;
       width: 100%;
       height: 100%;
    }

       
  `,
  ],
})
export class ArrowComponent {}
