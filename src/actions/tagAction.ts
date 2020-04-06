// import constants
import * as ActionTypes from "constants/actionTypes";

// import model
import * as Model from "models/tagModel";

export const getTags = {
  start: () => ({
    type: ActionTypes.GET_TAGS_START as typeof ActionTypes.GET_TAGS_START
  }),

  success: (tags: Model.Tag[]) => ({
    type: ActionTypes.GET_TAGS_SUCCESS as typeof ActionTypes.GET_TAGS_SUCCESS,
    payload: tags
  }),

  failure: () => ({
    type: ActionTypes.GET_TAGS_FAILURE as typeof ActionTypes.GET_TAGS_FAILURE
  })
};
