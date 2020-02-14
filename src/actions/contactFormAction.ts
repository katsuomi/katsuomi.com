// import constants
import * as ActionTypes from "constants/actionTypes";

// import model
import * as Model from "models/contactFormModel";

export const submitContactForm = {
  start: (data: Model.ContactFormType) => ({
    type: ActionTypes.SUBMIT_CONTACT_FORM_START as typeof ActionTypes.SUBMIT_CONTACT_FORM_START,
    payload: data
  }),
  success: () => ({
    type: ActionTypes.SUBMIT_CONTACT_FORM_SUCCESS as typeof ActionTypes.SUBMIT_CONTACT_FORM_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.SUBMIT_CONTACT_FORM_FAILURE as typeof ActionTypes.SUBMIT_CONTACT_FORM_FAILURE
  })
};
