import { Component, OnInit } from '@angular/core';
import {Article} from '../article';
import {StoreService} from "../store.service";
import {UpVoteAction} from "../store/actions";
import {upvote, downvote} from "../store/actioncreators";

@Component({
  selector: 'reddit-article',
  inputs: ['article'],
  host: {
    class: 'row'
  },
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  store:StoreService;
  article: Article;

  constructor(store:StoreService) {
    this.store = store;
  }

  ngOnInit() {
  }

  voteUp() {
    this.store.state.dispatch(upvote(this.article.id));
    // this.article.voteUp();
    return false;
  }

  voteDown() {
    this.store.state.dispatch(downvote(this.article.id));
    // this.article.voteDown();
    return false;
  }

}
