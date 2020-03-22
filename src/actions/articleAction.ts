// import constants
import * as ActionTypes from "constants/actionTypes";

// import model
import * as Model from "models/articleModel";

export const createArticle = {
  start: (payload: Model.Article) => ({
    type: ActionTypes.CREATE_ARTICLE_START as typeof ActionTypes.CREATE_ARTICLE_START,
    payload: payload
  }),
  success: () => ({
    type: ActionTypes.CREATE_ARTICLE_SUCCESS as typeof ActionTypes.CREATE_ARTICLE_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.CREATE_ARTICLE_FAILURE as typeof ActionTypes.CREATE_ARTICLE_FAILURE
  })
};

export const getSlideShowArticles = {
  start: () => ({
    type: ActionTypes.GET_SLIDE_SHOW_ARTICLES_START as typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_START
  }),
  success: (articles: Model.Article[]) => ({
    type: ActionTypes.GET_SLIDE_SHOW_ARTICLES_SUCCESS as typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_SUCCESS,
    payload: articles
  }),

  failure: () => ({
    type: ActionTypes.GET_SLIDE_SHOW_ARTICLES_FAILURE as typeof ActionTypes.GET_SLIDE_SHOW_ARTICLES_FAILURE
  })
};
