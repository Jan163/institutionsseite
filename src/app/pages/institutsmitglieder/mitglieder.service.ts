import { Injectable } from '@angular/core';

import{Mitglied} from './mitglieder';

@Injectable()
export class MitgliederService {

  constructor() { }

  edit:boolean;
  index:number;

  mitglieder=[
    new Mitglied("https://www.bundeskanzlerin.de/resource/blob/182148/616954/7c615de4e244a05da1fc26824b0cfdf6/start-bild-data.jpg","Angela Merkel","Präsidentin","0461-806 806","service@flensburg.ihk.de" ),
    new Mitglied("https://rotary.de/media/artikel/online/13609/wwwgr_022019-D1890-Haupttext-Soerensen-Bild1.jpg","Rolf-Ejvind Sörensen","Präsident","0461-806 806","service@flensburg.ihk.de" ),
    new Mitglied("https://www.aga.de/fileadmin/user_upload/News/News_2019/Ibsen_IHK_SH.jpg","Björn Ipsen","Hauptgeschäftsführer","0461-806 806","service@flensburg.ihk.de" ),
    new Mitglied("https://www.ihk-schleswig-holstein.de/blueprint/servlet/resource/image/4138818/teaserimage/310/206/d9ea032e129f0c040df8f2741da7db1b/qd/kontaktbild-service-center-flensburg.jpg/","Team Service-Center","Service-Center","0461-806 806","service@flensburg.ihk.de" ),
    new Mitglied("https://www.aga.de/fileadmin/user_upload/News/News_2019/Ibsen_IHK_SH.jpg","Björn Ipsen","Hauptgeschäftsführer","0461-806 806","service@flensburg.ihk.de" ),
    new Mitglied("https://www.aga.de/fileadmin/user_upload/News/News_2019/Ibsen_IHK_SH.jpg","Björn Ipsen","Hauptgeschäftsführer","0461-806 806","service@flensburg.ihk.de" ),
  ]
   post={
    img:"",
    name:"",
    position: "",
    kontakt:"",
    email:""
  }
  onAddworker(){
     this.mitglieder.push(new Mitglied(this.post.img,this.post.name,this.post.position,this.post.kontakt,this.post.email))
    this.post={
    img:"",
    name:"",
    position: "",
    kontakt:"",
    email:""
    }
   };
   onDelete(index:number){
     this.mitglieder.splice(index,1);
   }
   output(){
     return this.mitglieder;
   }
   onEdit(index:number){
    this.edit=true;
    this.post.img=this.mitglieder[index].img;
    this.post.name=this.mitglieder[index].name;
    this.post.position=this.mitglieder[index].position;
    this.post.kontakt=this.mitglieder[index].kontakt;
    this.post.email=this.mitglieder[index].email;
    this.index=index;
   }
   onEditMitarbeiter(){
    this.mitglieder[this.index].img=this.post.img;
    this.mitglieder[this.index].name=this.post.name;
    this.mitglieder[this.index].position=this.post.position;
    this.mitglieder[this.index].kontakt=this.post.kontakt;
    this.mitglieder[this.index].email=this.post.email;
    this.edit=false;
    this.post.img="";
    this.post.name="";
    this.post.position="";
    this.post.kontakt="";
    this.post.email=""
   }
}