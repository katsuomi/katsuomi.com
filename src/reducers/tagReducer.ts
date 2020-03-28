import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/tagModel";

const initialState: Model.TagState = {
  isLoading: false,
  tags: []
};

const tag: Reducer<Model.TagState, Model.TagAction> = (
  state: Model.TagState = initialState,
  action: Model.TagAction
): Model.TagState => {
  switch (action.type) {
    case ActionTypes.GET_TAGS_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_TAGS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
};

export default tag;
