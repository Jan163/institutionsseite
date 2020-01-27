import { Injectable } from '@angular/core';

import {News} from './news';

@Injectable()
export class NewsService {

  constructor() { }

  edit:boolean;
  index:number;
  newse=[
    new News("Weiterbildungssprechtag","Stetige Fortbildung kann den entscheidenden Unterschied im wirtschaftlichen Wettbewerb ausmachen. Daher bietet die IHK Flensburg jeweils am ersten Montag im Monat einen Weiterbildungssprechtag an. Individuelle Beratung und Lösungen stehen im Mittelpunkt der Gespräche. Worin sich ein Angestellter weiterbilden möchte und was tatsächlich zu seinen Wünschen passt, ist nicht immer deckungsgleich sagt Bente Jacobsen, Weiterbildungsberaterin bei der IHK Flensburg. Die Berater informieren unter anderem über IHK-Fortbildungsprüfungen zum Meister, Fachwirt und Fachkaufmann sowie über duale oder triale Studiengänge und Verbundmodelle im Bereich Aus- und Weiterbildung. Neben Firmen und deren Mitarbeiter können sich auch Studienaussteiger beraten lassen. Die Beratung ist kostenfrei.","03.02.2020","Heinrichstraße 28-34","24937 Flensburg"),
    new News("Beratungstag Unternehmensförderung und -finanzierung","Die IHK zu Lübeck bietet in Zusammenarbeit mit den Förderlotsen der Investitionsbank Schleswig-Holstein mehrmals im Jahr Beratungstage zur Unternehmensförderung und -finanzierung an. Das Angebot richtet sich an Unternehmen sowie Existenzgründer, die die Finanzierung ihres Vorhabens durch die Einbeziehung öffentlicher Mittel optimieren wollen. Für die Unternehmer ist es hilfreich, sich bereits im Vorfeld eines Bankengesprächs ausreichend über die entsprechenden Programme zu informieren. Das Vorhaben sollte soweit konkretisiert sein, dass ein aussagefähiges Konzept vorliegt. Die Einzelberatung (pro Gespräch circa 50 Minuten) ist kostenfrei. Um individuelle Terminvereinbarung durch telefonische Anmeldung wird gebeten.","04.02.2020","Fackenburger Allee 2","23554 Lübeck")
  ]

  post={ 
    titel: "",
    bericht:"",
    datum:"",
    strasse:"",
    ort:"",
  }

  onAddNews(){
    this.newse.push(new News(this.post.titel,this.post.bericht,this.post.datum,this.post.strasse,this.post.ort,))
    this.post={ 
      titel: "",
      bericht:"",
      datum:"",
      strasse:"",
      ort:"",
    }
  }
  
  onDelete(index:number){
    this.newse.splice(index,1);
  }
  output(){
    return this.newse
  }
  onEdit(index:number){
    this.edit=true;
    this.post.titel=this.newse[index].titel;
    this.post.bericht=this.newse[index].bericht;
    this.post.datum=this.newse[index].datum;
    this.post.strasse=this.newse[index].strasse;
    this.post.ort=this.newse[index].ort;
    this.index=index;
  }

   onEditNews(){
    this.newse[this.index].autor=this.post.titel;
    this.newse[this.index].jahr=this.post.bericht;
    this.newse[this.index].ausgabe=this.post.datum;
    this.newse[this.index].titel=this.post.strasse;
    this.newse[this.index].link=this.post.ort;
    this.edit=false;
    this.post.titel="";
    this.post.bericht="";
    this.post.datum="";
    this.post.strasse="";
    this.post.ort="";
  }
}