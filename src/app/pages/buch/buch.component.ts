import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../shared.service';
import {Buch} from './buch';
import {BuchService} from './buch.service'



@Component({
  selector: 'app-buch',
  templateUrl: './buch.component.html',
  styleUrls: ['./buch.component.css']
})
export class BuchComponent{

  buecher=[]
  login:boolean;

  constructor(
    private sharedService:SharedService,
    private buchService:BuchService) {
      this.login=this.sharedService.output(),
      this.buecher=this.buchService.output() }

  onAddPublication(){
    this.buchService.onAddPublication();
   };

}