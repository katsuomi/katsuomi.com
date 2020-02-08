/**
 *
 * flashMessageModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface FlashMessageType {
  id: number;
  message: string;
}

export interface FlashMessageState {
  flashMessages: { id: number; message: string }[];
}

export interface AddFlashMessageAction {
  type: typeof ActionTypes.ADD_FLASH_MESSAGE;
  payload: string;
}

export interface RemoveFlashMessageAction {
  type: typeof ActionTypes.REMOVE_FLASH_MESSAGE;
  payload: number;
}

export type FlashMessagesAction =
  | AddFlashMessageAction
  | RemoveFlashMessageAction;
