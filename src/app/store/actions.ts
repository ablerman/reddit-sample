import {Action} from 'redux';

import {Article} from "../article";

export interface AddArticleAction  extends Action{
    article:Article
}

export interface UpVoteAction extends Action {
    article_id:string;
}

export interface DownVoteAction extends Action {
    article_id:string;
}