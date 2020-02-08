import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/flashMessagesModel";

const initialState: Model.FlashMessageState = {
  flashMessages: []
};

const flashMessages: Reducer<
  Model.FlashMessageState,
  Model.FlashMessagesAction
> = (
  state: Model.FlashMessageState = initialState,
  action: Model.FlashMessagesAction
): Model.FlashMessageState => {
  switch (action.type) {
    case ActionTypes.ADD_FLASH_MESSAGE:
      const flashMessagesLength = state.flashMessages.length;
      const errorMessage = action.payload;
      return {
        ...state,
        flashMessages: [
          ...state.flashMessages,
          { id: flashMessagesLength, message: errorMessage }
        ]
      };
    case ActionTypes.REMOVE_FLASH_MESSAGE:
      const flashMessages = state.flashMessages.filter(flashMessage => {
        return flashMessage.id !== action.payload;
      });
      return {
        ...state,
        flashMessages
      };
    default: {
      return state;
    }
  }
};

export default flashMessages;
