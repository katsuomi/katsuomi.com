import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import { createArticle } from "actions/articleAction";
import { addFlashMessage } from "actions/flashMessagesAction";

// import APIs
import * as API from "apis/articleAPI";

// import models
import * as Model from "models/articleModel";

function* runCreateArticle(action: Model.CreateArticleStartAction) {
  const data = action.payload;
  const handler = API.createAtricle;
  const { success, error } = yield call(handler, data);
  if (success && !error) {
    const payload = {
      type: "success",
      message: "記事を投稿しました"
    };
    yield put(createArticle.success());
    yield put(addFlashMessage(payload));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(createArticle.failure());
  }
}

export function* watchArticle() {
  yield takeLatest(ActionTypes.CREATE_ARTICLE_START, runCreateArticle);
}

export default function* rootSaga() {
  yield all([fork(watchArticle)]);
}
