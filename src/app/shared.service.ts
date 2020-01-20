import { Injectable,Output, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService{

    constructor(){}
      login=false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    toogle(){
      this.login=!this.login;
      this.change.emit(this.login);
    }
    output(){
      return this.login;
    }
}