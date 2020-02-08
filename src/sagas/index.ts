import { fork } from "redux-saga/effects";
import adminLoginSaga from "sagas/adminLoginSaga";

// -----------------------------------------------------------------------------
// root
// -----------------------------------------------------------------------------

export default function* rootSaga() {
  yield fork(adminLoginSaga);
}
