// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/flashMessagesModel";

export const addFlashMessage = (
  errorMessage: string
): Model.AddFlashMessageAction => ({
  type: ActionTypes.ADD_FLASH_MESSAGE,
  payload: errorMessage
});

export const removeFlashMessage = (
  id: number
): Model.RemoveFlashMessageAction => ({
  type: ActionTypes.REMOVE_FLASH_MESSAGE,
  payload: id
});
