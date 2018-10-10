import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicFiscal';
  isCollapsed: boolean[] = new Array(false, false, false, false,false, false,false, false,false, false,false)
    constructor() {
      this.isCollapsed = new Array(false, false, false, false,false, false,false, false,false, false,false, );
    }
}
