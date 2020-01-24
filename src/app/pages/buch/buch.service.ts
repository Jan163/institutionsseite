import { Injectable } from '@angular/core';

import {Buch} from './buch';

@Injectable()
export class BuchService {

  constructor() { }
  edit:boolean;
  index:number;

  buchver=[
    new Buch("Kreuzhof, R.","  Wirtschaftsethik: Ethikmanagement und Technikbewertung, Einführung in die Theorie und Grundlagen für die Praxis",2018, "1.0","Rainer Hampp Verlag."),
    new Buch("Behrends, T. / Jochims, T. / Nienhüser, W.","Erkenntnis und Fortschritt: Beiträge aus Personalforschung und Managementpraxis" ,2015, "1.0","Rainer Hampp Verlag."),
    new Buch("Behrends, T. / Jochims, T. / Nienhüser, W.", "Mit KreativITät zur unternehmerischen Selbstständigkeit: Informatik nicht nur für Jungs! 20 genderorientierte Unterrichtseinheiten für die Sek. 1", 2014, "1.0","Schwalbach: Wochenschau Verlag."),
    new Buch("Brown, K. / Burgess, J. / Festing, M. / Royer, S.", "Resources and Competitive Advantage in Clusters",2013,"1.0","Rainer Hampp Verlag."),
    ]

  post={
  autor:"",
  titel: "", 
  jahr: "",
  ausgabe:"",
  verlag:"",
  }

   onAddBuch(){
     this.buchver.push(
       new Buch(this.post.autor,this.post.titel,this.post.jahr,this.post.ausgabe,this.post.verlag)
     )
    this.post={
      autor:"",
      titel: "", 
      jahr: "",
      ausgabe:"",
      verlag:"",
      }
   };
  onDelete(index:number){
     this.buchver.splice(index,1)
   }
   output(){
     return this.buchver;
   }
  onEdit(index:number){
    this.edit=true;
    this.post.autor=this.buchver[index].autor;
    this.post.titel=this.buchver[index].titel;
    this.post.jahr=this.buchver[index].jahr;
    this.post.ausgabe=this.buchver[index].ausgabe;
    this.post.verlag=this.buchver[index].verlag;
    this.index=index;
   }
   onEditBuch(){
    this.buchver[this.index].autor=this.post.autor;
    this.buchver[this.index].titel=this.post.titel;
    this.buchver[this.index].jahr=this.post.jahr;
    this.buchver[this.index].ausgabe=this.post.ausgabe;
    this.buchver[this.index].verlag=this.post.verlag;
    this.edit=false;
    this.post.autor="";
    this.post.titel="";
    this.post.jahr="";
    this.post.ausgabe="";
    this.post.verlag=""
   }
}