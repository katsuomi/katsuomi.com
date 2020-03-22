import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/articleModel";

const initialState: Model.ArticleState = {
  isLoading: false
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
    default: {
      return state;
    }
  }
};

export default article;
