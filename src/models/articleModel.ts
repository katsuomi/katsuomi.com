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
  date: Date;
  tag_ids: string[];
  thumbnail_image_path: string;
  favorite_count?: number;
  is_add_slide_show?: boolean;
}

export interface ArticleState {
  isLoading: boolean;
  slideShowArticles: Article[];
  latestArticles: Article[];
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
}

export interface GetLatestArticlesSuccessAction {
  type: typeof ActionTypes.GET_LATEST_ARTICLES_SUCCESS;
  payload: Article[];
}

export interface GetLatestArticlesFilureAction {
  type: typeof ActionTypes.GET_LATEST_ARTICLES_FAILURE;
}

export type ArticleAction =
  | CreateArticleStartAction
  | CreateArticleSuccessAction
  | CreateArticleFailureAction
  | GetSlideShowArticlesStartAction
  | GetSlideShowArticlesSuccessAction
  | GetSlideShowArticlesFilureAction
  | GetLatestArticlesStartAction
  | GetLatestArticlesSuccessAction
  | GetLatestArticlesFilureAction;
