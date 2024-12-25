import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
  presentElement:any = 'students';

  setPresentElement(val: any) {
    this.presentElement = val;
  }

  getPresentElement(val: any) {
    if(val === this.presentElement) {
      return 'active';
    } else {
      return 'inactive';
    }
  }
}
