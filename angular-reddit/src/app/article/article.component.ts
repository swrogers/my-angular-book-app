import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;


  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    );
   }

   voteUp(): boolean {
     this.article.voteUp();
     return false;  // to not propogate the event to the parent
   }

   voteDown(): boolean {
     this.article.voteDown();
     return false;  // to not propogate the event to the parent
   }

  ngOnInit() {
  }

}
