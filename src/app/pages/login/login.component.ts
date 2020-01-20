import { Component,Output,EventEmitter,Input,HostBinding } from '@angular/core';

import {SharedService} from '../../shared.service';

@Component({
  selector: 'my-login',
 templateUrl: './login.component.html',
   styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {

  @HostBinding('class.login')

  login=false;
    constructor(
      private sharedService: SharedService){this.login=this.sharedService.output()}
    
  onlogin(){
    this.sharedService.toogle();
  }

  ngOnInit(){
    this.sharedService.change.subscribe(login => {
      this.login=login;    
      });
  }
}

