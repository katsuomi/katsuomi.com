import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/articleModel";

const initialState: Model.ArticleState = {
  isLoading: false,
  slideShowArticles: [],
  latestArticles: [],
  article: {
    uid: "",
    content: "",
    title: "",
    date: new Date(),
    tag_ids: [],
    thumbnail_image_path: ""
  }
};

const article: Reducer<Model.ArticleState, Model.ArticleAction> = (
  state: Model.ArticleState = initialState,
  action: Model.ArticleAction
): Model.ArticleState => {
  switch (action.type) {
    case ActionTypes.CREATE_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.CREATE_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.GET_SLIDE_SHOW_ARTICLES_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_SLIDE_SHOW_ARTICLES_SUCCESS:
      return {
        ...state,
        slideShowArticles: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_SLIDE_SHOW_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.GET_LATEST_ARTICLES_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_LATEST_ARTICLES_SUCCESS:
      return {
        ...state,
        latestArticles: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_LATEST_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.GET_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
};

export default article;
