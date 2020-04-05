/**
 *
 * flashMessageModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface FlashMessageType {
  id: string;
  type: string;
  message: string;
}

export interface FlashMessagePayloadType {
  type: string;
  message: string;
}

export interface FlashMessageState {
  flashMessages: FlashMessageType[];
}

export interface AddFlashMessageAction {
  type: typeof ActionTypes.ADD_FLASH_MESSAGE;
  payload: FlashMessagePayloadType;
}

export interface RemoveFlashMessageAction {
  type: typeof ActionTypes.REMOVE_FLASH_MESSAGE;
  payload: string;
}

export type FlashMessagesAction =
  | AddFlashMessageAction
  | RemoveFlashMessageAction;
