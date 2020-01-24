import { Component } from '@angular/core';

import {SharedService} from '../../shared.service';
import  {Landing} from './landing';
import {LandingService} from './landing.service';

import {MitgliederService} from '../institutsmitglieder/mitglieder.service';
import {Mitglied} from '../institutsmitglieder/mitglieder';
import {Praesident} from './preasident';


@Component({
  selector: 'my-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent  {
  landings=[];
  mitglieder=[];

  login:boolean;
  constructor(
    private sharedService:SharedService,
    private landingService: LandingService,
    private mitgliederService: MitgliederService){
      this.login=this.sharedService.output(),
      this.landings=this.landingService.output(),
      this.mitglieder=this.mitgliederService.output()
    }
  
  onAddLanding(){
    this.landingService.onAddLanding();
  }

  onEditLanding(){
    this.landingService.onEditLanding();
  }
}
