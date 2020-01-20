import { Component } from '@angular/core';

import {SharedService} from '../../shared.service';
import {Neuigkeit} from './neuigkeiten';
import {NeuigkeitenService} from './neuigkeiten.service'

@Component({
  selector: 'my-neuigkeiten',
templateUrl: './neuigkeiten.component.html'
})
export class NeuigkeitenComponent  {
  neuigkeiten=[];

  login:boolean;
  constructor(
    private sharedService: SharedService,
    private neuigkeitenService: NeuigkeitenService){
      this.login=this.sharedService.output(),
      this.neuigkeiten=this.neuigkeitenService.output()
    }  

  onAddNeuigkeit(){
    this.neuigkeitenService.onAddNeuigkeit();
  }

  onEditNeuigkeit(){
    this.neuigkeitenService.onEditNeuigkeit();
  }
}