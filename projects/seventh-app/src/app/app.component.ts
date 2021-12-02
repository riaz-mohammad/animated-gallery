
import { Component, OnInit } from '@angular/core';
import { animations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [...animations]
})
export class AppComponent implements OnInit {
  public data: string[] = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
  public index = -1;
  public state!: boolean | undefined;
  public enter = '0%';
  public leave = '0%';
  private changeState(): void {
    this.state = !this.state;
  }

  public right(enter: string, leave: string): void {
    this.enter = enter;
    this.leave = leave;
    this.changeState();
    if (this.index === this.data.length -1) {
      this.index = 0;
      return;
    }
    
    this.index++;

  }

    
  public left(enter: string, leave: string): void {
    this.enter = enter;
    this.leave = leave;
    this.changeState();
    if (!(this.index)) {
      this.index = this.data.length - 1;
      return;
    }

    this.index--;
    
  }

  
  public activate(index: number): void {
    this.index = index;
  }


  public start(): void {
    this.state = true;
    this.index++;
  }
  ngOnInit(): void {}
}
