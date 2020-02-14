/**
 *
 * flashMessageModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface FlashMessageType {
  id: number;
  type: string;
  message: string;
}

export interface FlashMessagePayloadType {
  type: string;
  message: string;
}

export interface FlashMessageState {
  flashMessages: { id: number; type: string; message: string }[];
}

export interface AddFlashMessageAction {
  type: typeof ActionTypes.ADD_FLASH_MESSAGE;
  payload: FlashMessagePayloadType;
}

export interface RemoveFlashMessageAction {
  type: typeof ActionTypes.REMOVE_FLASH_MESSAGE;
  payload: number;
}

export type FlashMessagesAction =
  | AddFlashMessageAction
  | RemoveFlashMessageAction;
