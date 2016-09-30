import { Injectable } from '@angular/core';

import {
  Action,
  Reducer,
  Store,
  createStore
} from 'redux';
import {Article} from './article';
import {AddArticleAction, UpVoteAction, DownVoteAction} from "./store/actions";
import {ADD_ARTICLE, DOWNVOTE, UPVOTE} from "./store/actioncreators";
import {AddArticleHandler, UpVoteHandler, DownVoteHandler} from "./store/actionhandlers";
import {AppState} from "./store/store";
import {UUID} from "angular2-uuid";

let initialState:AppState = { articles:[
    {id:UUID.UUID(), title:'Angular 2', link:'http://angular.io', votes:3},
    {id:UUID.UUID(), title:'Fullstack', link:'http://fullstack.io', votes:1},
    {id:UUID.UUID(), title:'Angular Homepage', link:'http://angular.io', votes:1}
] };

let reducer:Reducer<AppState> = (state:AppState, action:Action):AppState => {
    switch(action.type){
        case ADD_ARTICLE:
            return AddArticleHandler(state, <AddArticleAction>action);
        case UPVOTE:
            return UpVoteHandler(state, <UpVoteAction>action);
        case DOWNVOTE:
            return DownVoteHandler(state, <DownVoteAction>action);
        default:
            return state;
    }
};


@Injectable()
export class StoreService {
  state:Store<AppState>;
  constructor() {
    this.state = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
    // this.state = createStore<AppState>(reducer);
  }

}
