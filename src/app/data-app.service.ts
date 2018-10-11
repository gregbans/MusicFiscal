import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAppService {
 public dataApp:any[] = [
  {
    "name": "1 - Artistes Musiciens",
    "desc": "Frais liés à l'instruement de music. Achat, entretien et frais annexes, plus les interets d'emprunt",
    "array": 0,
    "idcollapse": 0
  },
  {
    "name": "2 - Frais de representation",
    "desc": "Frais vestimentaires et de coiffure, de représentation, de communications téléphoniques professionnelles, de formation et de fournitures diverses (partitions, pupitre...)",
    "array": 1,
    "idcollapse": 1
  },
  {
    "name": "3 - Frais de transport",
    "desc": "Frais de transport entre le domicile et le lieux de travail.",
    "array": 2,
    "idcollapse": 2
  },
  {
    "name": "4 - Autres frais de transport",
    "desc": "Deplacement entre un logement provisoire et le lieu de travail.",
    "array": 3,
    "idcollapse": 3
  },
  {
    "name": "5 - Frais de repas",
    "desc": "Frais supplementaires de repas sur le lieu de travail.",
    "array": 4,
    "idcollapse": 4
  },
  {
    "name": "6 - Frais de repas en dépalcement",
    "desc": "A preciser.",
    "array": 5,
    "idcollapse": 5
  },
  {
    "name": "7 - Frais de documentation",
    "desc": "A preciser.",
    "array": 6,
    "idcollapse": 6
  },
  {
    "name": "8 - Frais de local professionnel",
    "desc": "Frais de matériel, mobilier et fournitures autres que celles visées au 2 ci-dessus",
    "array": 7,
    "idcollapse": 7
  },
  {
    "name": "9 - Frais de Materiel",
    "desc": "Frais de matériel, mobilier et fournitures autres que celles visées au 2 ci-dessus",
    "array":8,
    "idcollapse": 8
  },
  {
    "name": "10 - Cotisations professionnelles",
    "desc": "A preciser.",
    "array":9,
    "idcollapse": 9
  },
  {
    "name": "11 - Autres Frais",
    "desc": "A preciser.",
    "array":10,
    "idcollapse": 10
  },  
      ]
  constructor() {}
}
