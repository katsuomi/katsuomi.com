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
