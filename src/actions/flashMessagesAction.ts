// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/flashMessagesModel";

export const addFlashMessage = (
  payload: Model.FlashMessagePayloadType
): Model.AddFlashMessageAction => ({
  type: ActionTypes.ADD_FLASH_MESSAGE,
  payload: payload
});

export const removeFlashMessage = (
  payload: string
): Model.RemoveFlashMessageAction => ({
  type: ActionTypes.REMOVE_FLASH_MESSAGE,
  payload: payload
});
