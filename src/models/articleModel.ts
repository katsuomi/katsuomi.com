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
  is_add_slide_show: boolean;
}

export interface ArticleState {
  isLoading: boolean;
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

export type ArticleAction =
  | CreateArticleStartAction
  | CreateArticleSuccessAction
  | CreateArticleFailureAction;
