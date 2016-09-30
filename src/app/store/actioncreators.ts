import {
    ActionCreator
} from 'redux';
import {
    AddArticleAction,
    UpVoteAction,
    DownVoteAction
} from './actions';
import {Article} from "../article";


export const ADD_ARTICLE:string = "add article";
export const addArticle:ActionCreator<AddArticleAction> = (article:Article) => ({
    type: ADD_ARTICLE,
    article:article
});

export const UPVOTE:string = "upvote";
export const upvote:ActionCreator<UpVoteAction> = (article_id:string) => ({
    type: UPVOTE,
    article_id:article_id
});

export const DOWNVOTE:string = "downvote";
export const downvote:ActionCreator<DownVoteAction> = (article_id:string) => ({
    type:DOWNVOTE,
    article_id:article_id
});
