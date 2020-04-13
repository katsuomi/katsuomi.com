/**
 *
 * articleModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface Article {
  uid?: string;
  content: string;
  title: string;
  subTitle: string;
  date: Date;
  tagIds: string[];
  thumbnailImagePath: string;
  goodCount?: number;
  isAddSlideShow?: boolean;
}

export interface ArticleState {
  isLoading: boolean;
  slideShowArticles: Article[];
  latestArticles: Article[];
  articles: Article[];
  articlesByTag: Article[];
  articlesByGoodCount: Article[];
  article: Article;
  prevArticle: Article;
  nextArticle: Article;
}

export class TimeStamp {
  seconds!: number;
  nanoseconds!: number;
}

export interface ArticleGoodCountPayLoad {
  articleId: string;
  isDone: boolean;
}

export interface CreateArticleStartAction {
  type: typeof ActionTypes.CREATE_ARTICLE_START;
  payload: Article;
}

export interface CreateArticleSuccessAction {
  type: typeof ActionTypes.CREATE_ARTICLE_SUCCESS;
}

export interface CreateArticleFailureAction {
  type: typeof ActionTypes.CREATE_ARTICLE_FAILURE;
}

export interface UpdateArticleStartAction {
  type: typeof ActionTypes.UPDATE_ARTICLE_START;
  payload: Article;
}

export interface UpdateArticleSuccessAction {
  type: typeof ActionTypes.UPDATE_ARTICLE_SUCCESS;
}

export interface UpdateArticleFailureAction {
  type: typeof ActionTypes.UPDATE_ARTICLE_FAILURE;
}

export interface ChangeArticleGoodCountStartAction {
  type: typeof ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_START;
  payload: ArticleGoodCountPayLoad;
}

export interface ChangeArticleGoodCountSuccessAction {
  type: typeof ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_SUCCESS;
}

export interface ChangeArticleGoodCountFailureAction {
  type: typeof ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_FAILURE;
}

export interface DeleteArticleStartAction {
  type: typeof ActionTypes.DELETE_ARTICLE_START;
  payload: string;
}

export interface DeleteArticleSuccessAction {
  type: typeof ActionTypes.DELETE_ARTICLE_SUCCESS;
}

export interface DeleteArticleFailureAction {
  type: typeof ActionTypes.DELETE_ARTICLE_FAILURE;
}

export interface GetSlideShowArticlesStartAction {
  type: typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_START;
}

export interface GetSlideShowArticlesSuccessAction {
  type: typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_SUCCESS;
  payload: Article[];
}

export interface GetSlideShowArticlesFilureAction {
  type: typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_FAILURE;
}

export interface GetLatestArticlesStartAction {
  type: typeof ActionTypes.GET_LATEST_ARTICLES_START;
  payload?: Date;
}

export interface GetLatestArticlesSuccessAction {
  type: typeof ActionTypes.GET_LATEST_ARTICLES_SUCCESS;
  payload: Article[];
}

export interface GetLatestArticlesFilureAction {
  type: typeof ActionTypes.GET_LATEST_ARTICLES_FAILURE;
}

export interface GetArticlesByGoodCountStartAction {
  type: typeof ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_START;
}

export interface GetArticlesByGoodCountSuccessAction {
  type: typeof ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_SUCCESS;
  payload: Article[];
}

export interface GetArticlesByGoodCountFilureAction {
  type: typeof ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_FAILURE;
}

export interface GetArticlesStartAction {
  type: typeof ActionTypes.GET_ARTICLES_START;
}

export interface GetArticlesSuccessAction {
  type: typeof ActionTypes.GET_ARTICLES_SUCCESS;
  payload: Article[];
}

export interface GetArticlesFilureAction {
  type: typeof ActionTypes.GET_ARTICLES_FAILURE;
}

export interface GetArticleStartAction {
  type: typeof ActionTypes.GET_ARTICLE_START;
  payload: string;
}

export interface GetArticleSuccessAction {
  type: typeof ActionTypes.GET_ARTICLE_SUCCESS;
  payload: Article;
}

export interface GetArticleFilureAction {
  type: typeof ActionTypes.GET_ARTICLE_FAILURE;
}

export interface GetPrevArticleStartAction {
  type: typeof ActionTypes.GET_PREV_ARTICLE_START;
  payload: Date;
}

export interface GetPrevArticleSuccessAction {
  type: typeof ActionTypes.GET_PREV_ARTICLE_SUCCESS;
  payload: Article;
}

export interface GetPrevArticleFilureAction {
  type: typeof ActionTypes.GET_PREV_ARTICLE_FAILURE;
}

export interface GetNextArticleStartAction {
  type: typeof ActionTypes.GET_NEXT_ARTICLE_START;
  payload: Date;
}

export interface GetNextArticleSuccessAction {
  type: typeof ActionTypes.GET_NEXT_ARTICLE_SUCCESS;
  payload: Article;
}

export interface GetNextArticleFilureAction {
  type: typeof ActionTypes.GET_NEXT_ARTICLE_FAILURE;
}

export interface GetArticlesByTagStartAction {
  type: typeof ActionTypes.GET_ARTICLES_BY_TAG_START;
  payload: string;
}

export interface GetArticlesByTagSuccessAction {
  type: typeof ActionTypes.GET_ARTICLES_BY_TAG_SUCCESS;
  payload: Article[];
}

export interface GetArticlesByTagFilureAction {
  type: typeof ActionTypes.GET_ARTICLES_BY_TAG_FAILURE;
}

export type ArticleAction =
  | CreateArticleStartAction
  | CreateArticleSuccessAction
  | CreateArticleFailureAction
  | UpdateArticleStartAction
  | UpdateArticleSuccessAction
  | UpdateArticleFailureAction
  | DeleteArticleStartAction
  | DeleteArticleSuccessAction
  | DeleteArticleFailureAction
  | ChangeArticleGoodCountStartAction
  | ChangeArticleGoodCountSuccessAction
  | ChangeArticleGoodCountFailureAction
  | GetSlideShowArticlesStartAction
  | GetSlideShowArticlesSuccessAction
  | GetSlideShowArticlesFilureAction
  | GetLatestArticlesStartAction
  | GetLatestArticlesSuccessAction
  | GetLatestArticlesFilureAction
  | GetArticlesByGoodCountStartAction
  | GetArticlesByGoodCountSuccessAction
  | GetArticlesByGoodCountFilureAction
  | GetArticlesStartAction
  | GetArticlesSuccessAction
  | GetArticlesFilureAction
  | GetArticleStartAction
  | GetArticleSuccessAction
  | GetPrevArticleStartAction
  | GetPrevArticleFilureAction
  | GetPrevArticleSuccessAction
  | GetNextArticleStartAction
  | GetNextArticleFilureAction
  | GetNextArticleSuccessAction
  | GetArticleFilureAction
  | GetArticlesByTagStartAction
  | GetArticlesByTagSuccessAction
  | GetArticlesByTagFilureAction;
