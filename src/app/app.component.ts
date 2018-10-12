import { Component } from '@angular/core';
import { DataAppService} from '../app/data-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataStock: any[]= []

  isCollapsed: boolean[] = new Array(false, false, false, false,false, false,false, false,false, false,false)

  constructor(private dataAppService:DataAppService) {
      this.isCollapsed = new Array(false, false, false, false,false, false,false, false,false, false,false, );
      this.dataStock = dataAppService.getDataApp();
    }
}
