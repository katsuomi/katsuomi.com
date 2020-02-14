import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import { submitContactForm } from "actions/contactFormAction";
import { addFlashMessage } from "actions/flashMessagesAction";

// import APIs
import * as API from "apis/contactFormAPI";

// import models
import * as Model from "models/contactFormModel";

function* runSubmitContactForm(action: Model.SubmitContactFormStartAction) {
  const data = action.payload;
  const handler = API.submitContactForm;
  const { success, error } = yield call(handler, data);
  if (success && !error) {
    const payload = {
      type: "success",
      message: "お問い合わせが送信されました"
    };
    yield put(submitContactForm.success());
    yield put(addFlashMessage(payload));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(submitContactForm.failure());
  }
}

export function* watchContactForm() {
  yield takeLatest(ActionTypes.SUBMIT_CONTACT_FORM_START, runSubmitContactForm);
}

export default function* rootSaga() {
  yield all([fork(watchContactForm)]);
}
