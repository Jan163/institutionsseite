import { Component, OnInit } from '@angular/core';

import {SharedService} from '../../shared.service';
import {News} from './news';
import {NewsService} from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  newse=[];
  login:boolean;

  constructor(
    private sharedService:SharedService,
    private newsService:NewsService) { 
      this.login=this.sharedService.output(),
      this.newse=this.newsService.output();
    }

  onAddNews(){
    this.newsService.onAddNews()
  }

  onEditNews(){
    this.newsService.onEditNews()
  }


}