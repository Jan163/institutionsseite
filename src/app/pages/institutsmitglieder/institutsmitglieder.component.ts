import { Component } from '@angular/core';

import {SharedService} from '../../shared.service';
import{Mitglieder} from './mitglieder';
import{MitgliederService} from './mitglieder.service';


@Component({
  selector: 'my-institutsmitglieder',
  templateUrl: './institutsmitglieder.component.html'

})
export class InstitutsmitgliederComponent  {
  mitglieder=[];

  login:boolean;
  constructor(private sharedService:SharedService,
              private mitgliederService:MitgliederService){
                this.login=this.sharedService.output(),
                this.mitglieder=this.mitgliederService.output()}
            
   onAddworker(){
    this.mitgliederService.onAddworker();
   };

   onEditMitarbeiter(){
     this.mitgliederService.onEditMitarbeiter();
   }
}

