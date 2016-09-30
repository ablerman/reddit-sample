import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';
import {Article} from '../article';
import { UUID } from 'angular2-uuid';
import {addArticle} from "../store/actioncreators";
import {StoreService} from "../store.service";
@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
  animations: [
      trigger('fadeTrigger', [
        state('in', style({ opacity: '1' })),
        transition('void => *', [style({ opacity: '0' }),
          animate('100ms 300ms')
        ]),
        transition('* => void', [
          animate('50ms', style({ opacity: '0' }))
        ])
      ])
  ]
})
export class RedditComponent implements OnInit {
  store:StoreService;
  articles:Article[];

  constructor(store:StoreService) {
    this.store = store;
    this.store.state.subscribe(this.stateChanged.bind(this))
  }

  ngOnInit() {
    this.stateChanged();
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let article = {id:UUID.UUID(), title:title.value, link:link.value, votes:1};
    this.store.state.dispatch(addArticle(article));
    title.value = '';
    link.value = '';
    return false;
  }

  stateChanged() {
    this.articles = this.sortedArticles();
  }
  sortedArticles(): Article[] {
    let state = this.store.state.getState();
    return state.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
