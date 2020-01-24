import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../shared.service';
import{Heft} from './heft';
import{HeftService} from './heft.service';

@Component({
  selector: 'app-heft',
  templateUrl: './heft.component.html',
  styleUrls: ['./heft.component.css']
})
export class HeftComponent{

  
  hefte=[];
  login:boolean;

  constructor(
    private sharedService:SharedService,
    private heftService:HeftService) { 
      this.login=this.sharedService.output(),
      this.hefte=this.heftService.ouput();
  }

  onAddHeft(){
    this.heftService.onAddHeft()
  }

  onEditHeft(){
    this.heftService.onEditHeft()
  }

}