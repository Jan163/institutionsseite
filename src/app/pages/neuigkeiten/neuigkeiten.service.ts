import { Injectable } from '@angular/core';

import {Neuigkeit} from './neuigkeiten';

@Injectable()
export class NeuigkeitenService {

  constructor() { }

  edit:boolean;
  index:number;

  neuigkeiten=[
    new Neuigkeit("150 Jahre IHK Flensburg","Sehr geehrte Damen und Herren,2020 feiern wir das 150-jährige Jubiläum der Industrie- und Handelskammer zu Flensburg.Anlass für uns, einen Blick zurück  in die bewegte Geschichte der Kaufleute und Märkte unseres Wirtschaftsraums an der Grenze zu Dänemark zu werfen - und uns gemeinsam mit Ihnen auf den Weg in die Zukunft zu begeben.Wir laden Sie herzlich ein, mit uns den Auftakt zum Jubiläumsjahr zu feiern. Ein kurzer Film stimmt darauf ein, ebenso wie eine Ausstellung im Foyer, die die wirtschaftliche Entwicklung der letzten anderthalb Jahrhunderte im IHK-Bezirk skizziert. Über interaktive Elemente können Sie zusätzlich in die Historie eintauchen.Auf den Austausch mit Ihnen beim anschließenden Get-together mit kleinem Imbiss freuen wir uns! Ihre Rolf-Ejvind Sörensen (Präsident) und Björn Ipsen (Hauptgeschäftsführer)","https://www.hcstader.de/fileadmin/_processed_/5/0/csm_150_Jahre_IHK_Flensburg_7174abc311.jpg"),
    new Neuigkeit("Eine Feier mit 79 Spitzen-Azubis"," Von insgesamt 2.292 Auszubildenden haben 2.130 in diesem Jahr im Bezirk der IHK Flensburg – also in Dithmarschen, Nordfriesland, Schleswig-Flensburg und der Stadt Flensburg – ihre Abschlussprüfungen in 59 kaufmännischen und gewerblich-technischen Berufen bestanden. 79 von ihnen haben dabei mit mindestens 87 von 100 möglichen Punkten die besten Ergebnisse erzielt, darunter sieben Absolventen eines dualen Studiengangs in sechs Berufen. Dafür hat die IHK sie in einer Feierstunde am 24. Oktober im Husumer NordseeCongressCentrum geehrt. Mit dabei waren Freunde und Angehörige der jungen Fachkräfte, Berufsschullehrer, Prüfer und die Ausbilder aus den Unternehmen.","https://www.ihk-schleswig-holstein.de/blueprint/servlet/resource/image/4571360/teaserimage/620/413/f5410100ff4c998ed47e780d28be145c/Nu/91-2019-10-25-pruefungbeste.jpg"),
    new Neuigkeit("Probier's mal","Klick, klick, klick – und gekauft. Der Online-Handel in Deutschland boomt. Allein 2018 wurden mehr als 53 Milliarden Euro verdient – in den letzten zehn Jahren hat sich somit der Umsatz vervierfacht. Doch wo Licht ist, ist auch Schatten. Denn: Besonders für den stationären Einzelhandel ist diese Entwicklung eine enorme Herausforderung. Um Kunden dauerhaft zu binden, sind frische Ideen gefragt. Wie können diese aussehen? Die Wirtschaft hat sich umgehört.Eine Naschkatze, die sei er schon immer gewesen, erzählt Kai Oliver Hübner. So verwundert es nicht, dass der gebürtige Flensburger nach der Schule eine Ausbildung in der örtlichen Dragee-Fabrik absolvierte. Heute kann sich Hübner Meister für Süßwarentechnik nennen – und seit Juni auch Gründer und Geschäftsführer der","https://www.ihk-schleswig-holstein.de/blueprint/servlet/resource/image/4551568/teaserimage/620/413/42fe5a1d6b498b9e3fd092f000ecac13/zQ/fl1-einzelhandel-innovativ-suesswarenwerkstatt.jpg"),
    new Neuigkeit("Hafenumzug – die Zeit läuft","Im Februar wurde die Verlagerung des Wirtschaftshafens vom Ost- an das Westufer bis 2023 beschlossen. Damit ist der Weg frei für die Entwicklung des Ostufers: Dort entstehen in den nächsten 15 Jahren neue Wohnungen, Kultur- und Freizeiteinrichtungen sowie Raum für Wissenschaft und Forschung.Etwa 70 Millionen Euro soll die Umgestaltung des Ostufers kosten. Vor dem Beschluss hat die IHK Flensburg deutlich gemacht, dass sie nicht grundsätzlich gegen eine Verlagerung des Hafenumschlags ist. Die mit der Entwicklung des Ostufers verbundenen wirtschaftlichen Potenziale sind offensichtlich. Klar ist jedoch auch: Ein Oberzentrum wie Flensburg braucht einen Hafen. Die IHK hat ihre Zustimmung zu dem Projekt deshalb daran geknüpft, dass die Stadt ein klares Konzept für die Zukunft des Hafens vorlegt. Dazu gehören realistische Kapazitäten, eine nahtlose Verlagerung ohne Unterbrechung des Umschlagbetriebs und die Beibehaltung der Liegeflächen am Ostufer.","https://www.ihk-schleswig-holstein.de/blueprint/servlet/resource/image/4551552/teaserimage/620/413/502c614573d43c506e94301e862d9de6/Dq/fl2-hafen-flensburg.jpg"),
  ]

  post={
    titel:"",
    bericht:"",
    img:"",
   
  };

  onAddNeuigkeit(){
    this.neuigkeiten.push(new Neuigkeit(this.post.titel,this.post.bericht,this.post.img))
    this.post={
      titel:"",
      bericht:"",
      img:"",
      
    }
  }
  
  onDelete(index:number){
    this.neuigkeiten.splice(index,1);
  }

  output(){
    return this.neuigkeiten;
  }

  onEdit(index:number){
    this.edit=true;
    this.post.titel=this.neuigkeiten[index].titel;
    this.post.bericht=this.neuigkeiten[index].bericht;
    this.post.img=this.neuigkeiten[index].img;
    this.index=index
  }
  
  onEditNeuigkeit(){
    this.neuigkeiten[this.index].titel=this.post.titel;
    this.neuigkeiten[this.index].bericht=this.post.bericht;
    this.neuigkeiten[this.index].img=this.post.img;
    this.edit=false;
    this.post.titel="";
    this.post.img="";
    this.post.bericht=""
  }

}