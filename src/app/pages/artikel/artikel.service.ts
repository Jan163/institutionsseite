import { Injectable } from '@angular/core';

import {Artikel}  from './artikel';

@Injectable()
export class ArtikelService {

  constructor() { }

  edit:boolean;
  index:number;

  artikele=[
    new Artikel("Kreuzhof, R.",)
  ]

  post={
    autor:"",
    titel: "", 
    jahr:"",
    erschien:"",
    hrsg:"",
    seiten:"",
    verlag:"",
  }

  onAddArtikel(){
    this.artikele.push(new Artikel(this.post.autor,this.post.titel,this.post.jahr,this.post.erschien,this.post.hrsg,this.post.seiten,this.post.verlag,))
    this.post={
      autor:"",
      titel: "", 
      jahr:"",
      erschien:"",
      hrsg:"",
      seiten:"",
      verlag:"",
    }
  }

  onDelete(index:number){
    this.artikele.splice(index,1)
  }
  output(){
    return this.artikele;
  }
  onEdit(index:number){
    this.edit=true;
    this.index=index;
    this.post.autor=this.artikele[index].autor;
    this.post.titel=this.artikele[index].titel;
    this.post.jahr=this.artikele[index].jahr;
    this.post.erschien=this.artikele[index].erschien;
    this.post.hrsg=this.artikele[index].hrsg;
    this.post.seiten=this.artikele[index].seiten;
    this.post.verlag=this.artikele[index].verlag;
  }

  onEditArtikel(){
    this.artikele[this.index].autor=this.post.autor;
    this.artikele[this.index].titel=this.post.titel;
    this.artikele[this.index].jahr=this.post.jahr;
    this.artikele[this.index].erschien=this.post.erschien;
    this.artikele[this.index].hrsg=this.post.hrsg;
    this.artikele[this.index].seiten=this.post.seiten;
    this.artikele[this.index].verlag=this.post.verlag;
    this.edit=false;
    this.post.autor="";
    this.post.titel="";
    this.post.jahr="";
    this.post.erschien="";
    this.post.hrsg="";
    this.post.seiten="";
    this.post.verlag="";
  }
}