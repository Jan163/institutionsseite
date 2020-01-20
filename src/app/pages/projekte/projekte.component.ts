import { Component,Input,EventEmitter } from '@angular/core';

import {SharedService} from '../../shared.service';
import {Projekt} from '.projekte';
import {ProjekteService} from './projekte.service';

@Component({
  selector: 'my-projekte',
templateUrl: './projekte.component.html'
})

export class ProjekteComponent  
{
  projekte=[];

  login:boolean;
  constructor(
      private sharedService: SharedService,
      private projekteService:ProjekteService) { 
        this.login=this.sharedService.output(),
        this.projekte=this.projekteService.output()}
  
  onAddProjekt(){
    this.projekteService.onAddProjekt();
  }

  onEditProjekt(){
    this.projekteService.onEditProjekt();
  }
}


