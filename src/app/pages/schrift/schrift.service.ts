import { Injectable } from '@angular/core';

import {Schrift} from './schrift'

@Injectable()
export class SchriftService {

  constructor() { }
  edit:boolean;
  index:number;

  schriftver=[
    new Schrift("Zur Rekonstruktion von Entrepreneurial Self-Efficacy von Unternehmnerinnen in patriarchal geprägten Gesellschaften","Mikkelsen, K.", 2018,"Rainer Hampp Verlag", "https://www.buchhandel.de/buch/9783957102126"),
    new Schrift("Ungeplante Unternehmensnachfolge im Mittelstand: Spezifische Problemlagen und betriebliche Bewältigungsstrategien","Kreter, D.", 2017,"Rainer Hampp Verlag", "http://www.jackstaedt-flensburg.de/wp-content/uploads/2017/04/Infoblatt-Kreter-Flensburger-Schriften.pdf"),
    new Schrift("Nachhaltigkeitsmanagement für kleine und mittlere Unternehmen aus der Lebensmittelbranche in Schleswig-Holstein: Eine Delphi-Studie für das Jahr 2025","Kreuzhof, R. / Nicolai, B. M. / Heybrock, H. / Besecke, S. / Cembolista, A. / Schröder, K.", 2016,"Rainer Hampp Verlag", "http://www.jackstaedt-flensburg.de/wp-content/uploads/2016/02/Band-6-Delphi-Studie-Lebensmittelbranche.pdf"),
    new Schrift("Kultur der Selbstständigkeit und Diversity Education: Eine Handlungsempfehlung für die universitäre Lehrerbildung","Klein, R.", 2014,"Rainer Hampp Verlag", "http://www.jackstaedt-flensburg.de/wp-content/uploads/2014/10/Band-5-Klein-Kultur-der-Selbst%C3%A4ndigkeit-Diversity-Education.pdf"),
    ]

  post={
    titel:"",
    autor:"",
    jahr: "", 
    verlag: "",
    link:"",
  }

  onAddSchrift(){
    this.schriftver.push(
      new Schrift(this.post.titel,this.post.autor,this.post.jahr,this.post.verlag,this.post.link)
    )
    this.post={
      titel:"",
      autor:"",
      jahr: "", 
      verlag: "",
      link:"",
  }
   };
  onDelete(index:number){
     this.schriftver.splice(index,1)
   }
   output(){
     return this.schriftver;
   }
  onEdit(index:number){
     this.edit=true;
     this.post.titel=this.schriftver[index].titel;
     this.post.autor=this.schriftver[index].autor;
     this.post.jahr=this.schriftver[index].jahr;
     this.post.verlag=this.schriftver[index].verlag;
     this.post.link=this.schriftver[index].link;
     this.index=index;
   }
  
  onEditSchrift(){
    this.schriftver[this.index].titel=this.post.titel;
    this.schriftver[this.index].autor=this.post.autor;
    this.schriftver[this.index].jahr=this.post.jahr;
    this.schriftver[this.index].verlag=this.post.verlag;
    this.schriftver[this.index].link=this.post.link;
    this.edit=false;
    this.post.titel="";
    this.post.autor="";
    this.post.jahr="";
    this.post.verlag="";
    this.post.link="";
  }
}