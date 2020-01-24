import { Injectable } from '@angular/core';

import{Projekt} from './projekte'

@Injectable()
export class ProjekteService {

  constructor() { }

  edit:boolean;
  index:number;

  projekte=[
    new Projekt("Neue Wege der Personalgewinnung: Beratung, Vermittlung und Förderung der Personalgewinnung im Mittelstand, Kooperationsprojekt Bundesagentur für Arbeit, Agentur für Arbeit Flensburg und Hochschule Flensburg","Das 3-jährige Kooperationsprojekt von Agentur für Arbeit und Dr. Jackstädt-Zentrum Flensburg soll die Arbeitsmarktberatung des Arbeitgeberservices fördern und zur Integration von bereits bestehenden Beratungsansätzen und –modellen für den regionalen Mittelstand beitragen. Dabei gilt es auf der Basis einer engen Zusammenarbeit den Bedarf der KMU aufzudecken, die richtigen Werkzeuge bei der Beratung einzusetzen und die betriebliche Aus- und Weiterbildung in den Unternehmen zu festigen. Mit Hilfe der gesammelten Erkenntnisse und den durchgeführten Analysen sollen anschließend Arbeitshilfen und weiterführende Informationen bereitgestellt werden. Im Ergebnis können durch diesen Wissens- und Erfahrungstransfer alle Akteure im Arbeitgeberservice profitieren und zusätzlich die eigenen Netzwerke erweitern.","3 Jahre"),
    new Projekt("Kosten-Nutzen-Wirkungen bei Frühen Hilfen","Empirische Studien zeigen, dass die soziale Lage von Familien mit Kindern wesentlich die Gesundheits- und Bildungsprozesse beeinflusst. Es müssen somit in sozial benachteiligten Stadtteilen Eltern und deren Kinder frühzeitig in Bildungsprozesse eingeschlossen werden, um deren psychische sowie körperliche Gesundheit zu verbessern. Dies kann durch eine niedrigschwellige und frühzeitige Gesundheitsberatung der Familien erfolgen, die auf ihre individuellen Bedürfnisse abgestimmt ist. Solche Beratungsprozesse werden z.B. durch die Schutzengel gGmbH durchgeführt, die die Lebenslagen benachteiligter Familien mit Kindern verbessern und ein Miteinander in der Gesellschaft gewährleisten sollen. Die Finanzierung erfolgt in der Regel durch freiwillige kommunale Gelder sowie über Fundraising – ein unsicheres Geschäft mit einer so wichtigen Leistung im Bereich der Frühen Hilfen.Gerade kleine und mittlere Unternehmen der Sozialwirtschaft unterliegen ständiger gesellschaftlicher Herausforderungen. Vor dem Hinblick der Auswirkungen des demografischen Wandels sowie leerer öffentlicher Kassen werden unternehmerische Akteure und Organisationen vor die Aufgabe gestellt, zunehmend Gestaltungsmechanismen zur Bewältigung dieser Herausforderungen zu entwickeln.Ziel des Forschungsprojektes ist es, mittels einer wirtschaftlichen Kosten-Nutzen-Betrachtung eine praktische Handlungsgrundlage zur Einführung von Unterstützungsmaßnahmen in Unternehmen der Sozialwirtschaft aufzuzeigen (hier: Implementierung einer Familien-Gesundheits-Kinderkrankenpflegerin in die Schutzengel gGmbH). Konzentriert werden soll sich insbesondere auf die Darstellung der direkten und sozialen Folgekosten/ Nutzen dieser Maßnahmen.","Dezember 2016 bis März 2017"),
    new Projekt("ScalingNorth – Wachstumsmanagement für KMU","Mit dem Projekt „ScalingNorth – Wachstumsmanagement für KMU“ legt die Hochschule Flensburg einen Grundstein, um wachstumsorientierte Unternehmen aus Schleswig-Holstein zu unterstützen. In dem zweijährigen Projekt wird ein Qualifizierungsprogramm zum Thema Unternehmenswachstum für mittelständische Clusterunternehmen in Schleswig-Holstein entwickelt und prototypisch durchgeführt. Die Laufzeit des Projekts endet voraussichtlich Dezember 2019.KMU und besonders junge Unternehmen mit hohem Wachstumspotenzial können in der Workshop-Reihe ihre Wachstumskompetenz entwickeln und ausbauen, Einblicke in Wachstumsunternehmen erhalten und sich mit anderen Unternehmen austauschen. Die Teilnehmer erhalten in der Workshop-Reihe ein Grundgerüst, mit dem sie Wachstumsprozesse anstoßen, steuern und durchführen können.Bei Interesse an weiterführenden Informationen oder der Teilnahme an dem Qualifizierungsprogramm, wenden Sie sich an die verantwortliche Projektmanagerin Beate Panitz.Das Vorhaben „ScalingNorth – Wachstumsmanagement für KMU“ wird aus dem Landesprogramm Arbeit mit Mitteln des Europäischen Sozialfonds gefördert. Das Landesprogramm Arbeit ist das Arbeitsmarktprogramm der Landesregierung für die Jahre 2014-2020. Schwerpunkte sind die Sicherung und Gewinnung von Fachkräften, die Unterstützung bei der Integration von Menschen, die es besonders schwer haben, in den ersten Arbeitsmarkt zu kommen und die Förderung des Potentials junger Menschen. Das Landesprogramm Arbeit hat ein Volumen von etwa 240 Millionen Euro, davon stammen knapp 89 Millionen Euro aus dem Europäischen Sozialfonds (ESF).","bis Dezember 2019"),
    
  ]

  post={
    titel:"",
    bericht:"",
    laufzeit:""
  }
  onAddProjekt(){
    this.projekte.push(new Projekt(this.post.titel,this.post.bericht,this.post.laufzeit))
    this.post={
      titel:"",
      bericht:"",
      laufzeit:""
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
    this.post.titel=this.projekte[index].titel;
    this.post.bericht=this.projekte[index].bericht;
    this.post.laufzeit=this.projekte[index].laufzeit;
    this.index=index;
  }
  onEditProjekt(){
    this.projekte[this.index].titel=this.post.titel;
    this.projekte[this.index].bericht=this.post.bericht;
    this.projekte[this.index].laufzeit=this.post.laufzeit;
    this.edit=false;
    this.post.titel="";
    this.post.bericht="";
    this.post.laufzeit="";
  }
}