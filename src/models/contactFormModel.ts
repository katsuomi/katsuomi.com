/**
 *
 * contactFormModel
 *
 */

// import constants
import * as ActionTypes from "constants/actionTypes";

export interface ContactFormType {
  name: string;
  email: string;
  content: string;
}

export interface ContactFormState {
  isLoading: boolean;
}

export interface SubmitContactFormStartAction {
  type: typeof ActionTypes.SUBMIT_CONTACT_FORM_START;
  payload: ContactFormType;
}

export interface SubmitContactFormSuccessAction {
  type: typeof ActionTypes.SUBMIT_CONTACT_FORM_SUCCESS;
}

export interface SubmitContactFormFailureAction {
  type: typeof ActionTypes.SUBMIT_CONTACT_FORM_FAILURE;
}

export type ContactFormAction =
  | SubmitContactFormStartAction
  | SubmitContactFormSuccessAction
  | SubmitContactFormFailureAction;
