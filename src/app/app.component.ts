import { Component } from '@angular/core';
import { DataAppService} from '../app/data-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicFiscal';
  isCollapsed: boolean[] = new Array(false, false, false, false,false, false,false, false,false, false,false)
    constructor(private dtpservice:DataAppService) {
      this.isCollapsed = new Array(false, false, false, false,false, false,false, false,false, false,false, );
      alert(this.dtpservice.dataApp);
    }
}
