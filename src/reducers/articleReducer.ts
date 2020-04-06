import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/articleModel";

const initialState: Model.ArticleState = {
  isLoading: false,
  slideShowArticles: [],
  latestArticles: [],
  articles: [],
  articlesByTag: [],
  article: {
    uid: "",
    content: "",
    title: "",
    subTitle: "",
    date: new Date(),
    tagIds: [],
    thumbnailImagePath: ""
  },
  prevArticle: {
    uid: "",
    content: "",
    title: "",
    subTitle: "",
    date: new Date(),
    tagIds: [],
    thumbnailImagePath: ""
  },
  nextArticle: {
    uid: "",
    content: "",
    title: "",
    subTitle: "",
    date: new Date(),
    tagIds: [],
    thumbnailImagePath: ""
  }
};


const article: Reducer<Model.ArticleState, Model.ArticleAction> = (
  state: Model.ArticleState = initialState,
  action: Model.ArticleAction
): Model.ArticleState => {
  switch(action.type) {
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
    case ActionTypes.UPDATE_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.DELETE_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_FAILURE:
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
    case ActionTypes.GET_ARTICLES_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_ARTICLES_FAILURE:
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
    case ActionTypes.GET_PREV_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_PREV_ARTICLE_SUCCESS:
      return {
        ...state,
        prevArticle: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_PREV_ARTICLE_FAILURE:
      return {
        ...state,
        prevArticle: {
          uid: "",
          content: "",
          title: "",
          subTitle: "",
          date: new Date(),
          tagIds: [],
          thumbnailImagePath: ""
        },
        isLoading: false
      };
    case ActionTypes.GET_NEXT_ARTICLE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_NEXT_ARTICLE_SUCCESS:
      return {
        ...state,
        nextArticle: {
          uid: "",
          content: "",
          title: "",
          subTitle: "",
          date: new Date(),
          tagIds: [],
          thumbnailImagePath: ""
        },
        isLoading: false
      };
    case ActionTypes.GET_NEXT_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.GET_ARTICLES_BY_TAG_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_ARTICLES_BY_TAG_SUCCESS:
      return {
        ...state,
        articlesByTag: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_ARTICLES_BY_TAG_FAILURE:
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
