import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import { adminLogin, adminLoginCache } from "actions/adminLoginAction";
import { addFlashMessage } from "actions/flashMessagesAction";

// import APIs
import * as API from "apis/adminLoginAPI";

// import models
import * as Model from "models/adminLoginModel";

function* runAdminLogin(action: Model.AdminLoginStartAction) {
  const password = action.payload;
  const handler = API.adminLogin;
  const { user, error } = yield call(handler, password);
  if (user && !error) {
    const payload = {
      type: "success",
      message: `管理者ID: ${user.uid}さんのログイン完了`
    };
    yield put(adminLogin.success(user));
    yield put(addFlashMessage(payload));
  } else {
    const payload = {
      type: "failure",
      message: error.message && error.message
    };
    yield put(addFlashMessage(payload));
    yield put(adminLogin.failure());
  }
}

function* runAdminLoginCache() {
  const handler = API.adminLoginCache;
  const { user, error } = yield call(handler);
  if (user && !error) {
    yield put(adminLoginCache.success(user));
  } else {
    yield put(adminLoginCache.failure());
  }
}

export function* watchAdminLogin() {
  yield takeLatest(ActionTypes.ADMIN_LOGIN_START, runAdminLogin);
  yield takeLatest(ActionTypes.ADMIN_LOGIN_CACHE_START, runAdminLoginCache);
}

export default function* rootSaga() {
  yield all([fork(watchAdminLogin)]);
}
