import {Component} from '@angular/core';


@Component ({
  selector: 'my-element-navigation',
templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ]
})

export class NavigationComponent {
  name: "IHK Flensburg";

  dropDown=false;


  onClickOption(clickOption:string){
    this.dropDown=false;
  }

}
