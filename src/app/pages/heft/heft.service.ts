import { Injectable } from '@angular/core';

import {Heft} from './heft';

@Injectable()
export class HeftService {

  constructor() { }
  edit:boolean;
  index:number;

  hefte=[
    new Heft("Julia Messer und Alexander Martin",2019,"Heft 18/2019","Open Innovation in KMU. Eine empirische Analyse ausgewählter Faktoren","https://www.jackstaedt-flensburg.de/wp-content/uploads/2019/04/Open-Innovation-in-KMU.-Eine-empirische-Analyse-ausgew%C3%A4hlter-Faktoren.pdf"),
    new Heft("Birte Nicolai, Anita Cembolista und Sabrina Diekmann",2018,"Heft 16/2018","Qualitätsmanagement in kleinen und mittleren Unternehmen","https://www.jackstaedt-flensburg.de/wp-content/uploads/2018/04/Flensburger-Heft-Nr.-16_Qualit%C3%A4tsmanagement-in-kleinen-und-mittleren-Unternehmen-1.pdf"),
    new Heft("Kirsten Rohrlack",2017,"Heft 15/2017","Veränderungsstress minimieren! Externe Unterstützung für neue und alte Chef´s im Rahmen der Betriebsübergabe","http://www.jackstaedt-flensburg.de/wp-content/uploads/2017/11/Artikel_Ver%C3%A4nderungsstress-minimieren_Rohrlack_102017.pdf"),
    new Heft("Dirk Ludewig und Stefanie Jordt",2018,"Heft 11/2016","Unternehmenslandschaft der Erneuerbaren Energien im Strombereich in Schleswig-Holstein: Unternehmenspräsentationen und Meinungsbild","http://www.jackstaedt-flensburg.de/wp-content/uploads/2016/01/DWJZ-Heft-Nr.-11-EKSH-Studie.pdf"),
    
  ]

  post={ 
    autor:"",
    jahr:"",
    ausgabe:"",
    titel:"",
    link:""
  }

  onAddHeft(){
    this.hefte.push(new Heft(this.post.autor,this.post.jahr,this.post.ausgabe,this.post.titel,this.post.link)
    )
    this.post={ 
      autor:"",
      jahr:"",
      ausgabe:"",
      titel:"",
      link:""
    }
  }

  onDelete(index:number){
    this.hefte.splice(index,1)
  }
  ouput(){
    return this.hefte;
  }
  onEdit(index:number){
    this.edit=true;
    this.post.autor=this.hefte[index].autor;
    this.post.jahr=this.hefte[index].jahr;
    this.post.ausgabe=this.hefte[index].ausgabe;
    this.post.titel=this.hefte[index].titel;
    this.post.link=this.hefte[index].link;
    this.index=index;
  }

  onEditHeft(){
    this.hefte[this.index].autor=this.post.autor;
    this.hefte[this.index].jahr=this.post.jahr;
    this.hefte[this.index].ausgabe=this.post.ausgabe;
    this.hefte[this.index].titel=this.post.titel;
    this.hefte[this.index].link=this.post.link;
    this.edit=false;
    this.post.autor="";
    this.post.jahr="";
    this.post.ausgabe="";
    this.post.titel="";
    this.post.link="";
  }
}