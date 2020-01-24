import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../shared.service';
import {Artikel} from './artikel';
import {ArtikelService} from './artikel.service';


@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent {

  artikele=[];
  login:boolean;

  constructor(
    private sharedService:SharedService,
    private artikelService:ArtikelService) {
      this.login=this.sharedService.output(),
      this.artikele=this.artikelService.output()
  }
  onAddArtikel(){
    this.artikelService.onAddArtikel();
  }

  onEditArtikel(){
    this.artikelService.onEditArtikel();
  }

}