import {Component,OnInit} from '@angular/core';

function dropdown() {
    $('.dropdown-toggle').dropdown()
}

@Component ({
  selector: 'my-element-navigation',
templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.css' ]
})

export class NavigationComponent implements OnInit{
  name: "IHK Flensburg";

  ngOnInit(){
    hello()
  }

}
