import { Injectable } from '@angular/core';

import{Projekt} from './projekte'

@Injectable()
export class ProjekteService {

  constructor() { }

  edit:boolean;
  index:number;

  projekte=[
    new Projekt("a","b"),
  ]

  post={
    img:"",
    bericht:""
  }
  onAddProjekt(){
    this.projekte.push(new Projekt(this.post.img,this.post.bericht))
    this.post={
      img:"",
      bericht:""
    }
  };
  onDelete(index:number){
    this.projekte.splice(index,1);
  }
  output(){
    return this.projekte;
  }
  onEdit(index:number){
    this.edit=true;
    this.post.img=this.projekte[index].img;
    this.post.bericht=this.projekte[index].bericht;
    this.index=index;
  }
  onEditProjekt(){
    this.projekte[this.index].img=this.post.img;
    this.projekte[this.index].bericht=this.post.bericht;
    this.edit=false;
    this.post.img="";
    this.post.bericht="";
  }
}