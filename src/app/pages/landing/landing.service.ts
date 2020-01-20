import { Injectable } from '@angular/core';

import {Landing} from './landing';

@Injectable()
export class LandingService {

  constructor() { }

  edit:boolean;
  index:number;

  landings=[
    new Landing("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Heinrichstrasse_34%2C_Flensburg.jpg/1280px-Heinrichstrasse_34%2C_Flensburg.jpg","Die Industrie- und Handelskammer zu Flensburg (abgekürzt: IHK Flensburg) ist die Industrie- und Handelskammer für die kreisfreie Stadt Flensburg sowie die Kreise Dithmarschen, Nordfriesland und Schleswig-Flensburg. Sie liegt in Flensburgs Stadtteil Jürgensby am Rand vom Sandberg nicht weit entfernt von der Handwerkskammer. Das alte Hauptgebäude der IHK, Heinrichstraße 34, gehört zu den Kulturdenkmalen der Stadt."),
  ]

  post={
    img:"",
    bericht:""
  }

  onAddLading(){
    this.landings.push(new Landing(this.post.img,this.post.bericht))
    this.post={
      img:"",
      bericht:""
    }
  };

  onDelete(index:number){
    this.landings.splice(index,1);
  }
  output(){
    return this.landings;
  };

  onEdit(index:number){
    this.edit=true;
    this.post.img=this.landings[index].img;
    this.post.bericht=this.landings[index].bericht;
    this.index=index;
  }

  onEditProjekt(){
    this.landings[this.index].img=this.post.img;
    this.landings[this.index].bericht=this.post.bericht;
    this.edit=false;
    this.post.img="";
    this.post.bericht="";
  }
}