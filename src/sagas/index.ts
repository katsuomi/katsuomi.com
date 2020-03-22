import { fork } from "redux-saga/effects";
import adminLoginSaga from "sagas/adminLoginSaga";
import contactFormSaga from "sagas/contactFormSaga";
import articleSaga from "sagas/articleSaga";

// -----------------------------------------------------------------------------
// root
// -----------------------------------------------------------------------------

export default function* rootSaga() {
  yield fork(adminLoginSaga);
  yield fork(contactFormSaga);
  yield fork(articleSaga);
}
