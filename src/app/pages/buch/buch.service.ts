import { Injectable } from '@angular/core';

import {Buch} from './buch';

@Injectable()
export class BuchService {

  constructor() { }
  buchver=[
    new Buch("Kreuzhof, R.","  Wirtschaftsethik: Ethikmanagement und Technikbewertung, Einführung in die Theorie und Grundlagen für die Praxis",2018, "1.0","Rainer Hampp Verlag."),
    new Buch("Behrends, T. / Jochims, T. / Nienhüser, W.","Erkenntnis und Fortschritt: Beiträge aus Personalforschung und Managementpraxis" ,2015, "1.0","Rainer Hampp Verlag."),
    new Buch("Behrends, T. / Jochims, T. / Nienhüser, W.", "Mit KreativITät zur unternehmerischen Selbstständigkeit: Informatik nicht nur für Jungs! 20 genderorientierte Unterrichtseinheiten für die Sek. 1", 2014, "1.0","Schwalbach: Wochenschau Verlag."),
    new Buch("Brown, K. / Burgess, J. / Festing, M. / Royer, S.", "Resources and Competitive Advantage in Clusters",2013,"1.0","Rainer Hampp Verlag."),
    ]

  post={
  forschungsprojekt:"",
  autor:"",
  publikationsTyp: "", 
  jahr: "",
  volumen:"",
  publisher:"",
  }

   onAddPublication(){
     this.buchver.push(
       new Buch(this.post.autor,this.post.titel,this.post.jahr,this.post.ausgabe,this.post.verlag)
     )
   };
  onDelete(index:number){
     this.buchver.splice(index,1)
   }
   output(){
     return this.buchver;
   }
  onEdit(index:number){
     this.buchver[index].autor;
   }
}