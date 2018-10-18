import { Component, OnInit } from '@angular/core';
import { DataAppService} from '../../data-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // creation d'un tablau pour stocker les données
  dataStock: any[]= []
  // declaration puis initialisation d'un tableau de boolean pour gerer l'ouverture des pop-up.
  isCollapsed: boolean[] = new Array(false, false, false, false,false, false,false, false,false, false,false)

  constructor(private dataAppService: DataAppService  ) {

    // recuperation du modele de donné
      this.dataStock = dataAppService.getDataApp();
  }
  ngOnInit() {
  }

}
