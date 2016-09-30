import {AddArticleAction, UpVoteAction, DownVoteAction} from "./actions";
import {AppState} from "./store";
import {Article} from "../article";


export const AddArticleHandler = function(state:AppState, action:AddArticleAction) {
    return {
        articles: state.articles.concat(action.article)
    }
};

export const UpVoteHandler = function(state:AppState, action:UpVoteAction) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.articles.find((a:Article) => a.id == action.article_id).votes += 1;
    return newState
};

export const DownVoteHandler = function(state:AppState, action:DownVoteAction) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.articles.find((a:Article) => a.id == action.article_id).votes -= 1;
    return newState
};