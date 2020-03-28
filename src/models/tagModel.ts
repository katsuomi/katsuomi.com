/**
 *
 * tagModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface Tag {
  id: string;
  text: string;
}

export interface TagState {
  isLoading: boolean;
  tags: Tag[];
}

export interface GetTagsStartAction {
  type: typeof ActionTypes.GET_TAGS_START;
}

export interface GetTagsSuccessAction {
  type: typeof ActionTypes.GET_TAGS_SUCCESS;
  payload: Tag[];
}

export interface GetTagsFilureAction {
  type: typeof ActionTypes.GET_TAGS_FAILURE;
}

export type TagAction =
  | GetTagsStartAction
  | GetTagsSuccessAction
  | GetTagsFilureAction;
