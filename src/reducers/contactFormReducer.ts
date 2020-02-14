import { Reducer } from "redux";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import models
import * as Model from "models/contactFormModel";

const initialState: Model.ContactFormState = {
  isLoading: false
};

const contactForm: Reducer<Model.ContactFormState, Model.ContactFormAction> = (
  state: Model.ContactFormState = initialState,
  action: Model.ContactFormAction
): Model.ContactFormState => {
  switch (action.type) {
    case ActionTypes.SUBMIT_CONTACT_FORM_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.SUBMIT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.SUBMIT_CONTACT_FORM_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default: {
      return state;
    }
  }
};

export default contactForm;
