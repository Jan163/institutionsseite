import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../shared.service';
import {Schrift} from './schrift';
import {SchriftService} from './schrift.service';


@Component({
  selector: 'app-schrift',
  templateUrl: './schrift.component.html',
  styleUrls: ['./schrift.component.css']
})
export class SchriftComponent {

  schriftveroeff=[];
  login:boolean;

    constructor(
      private sharedService:SharedService,
      private schriftService:SchriftService){
        this.login=this.sharedService.output(),
        this.schriftveroeff=this.schriftService.output()}

     onAddPublication(){
    this.schriftService.onAddPublication();
   };

}