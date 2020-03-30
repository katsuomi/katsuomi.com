import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import {
  createArticle,
  getSlideShowArticles,
  getLatestArticles,
  getArticle
} from "actions/articleAction";
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

function* runGetSlideShowArticles(
  action: Model.GetSlideShowArticlesStartAction
) {
  const handler = API.getSlideShowArticles;
  const { articles, error } = yield call(handler);
  if (articles && !error) {
    yield put(getSlideShowArticles.success(articles));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getSlideShowArticles.failure());
  }
}

function* runGetLatestArticles(action: Model.GetLatestArticlesStartAction) {
  const handler = API.getLatestArticles;
  const { articles, error } = yield call(handler);
  if (articles && !error) {
    yield put(getLatestArticles.success(articles));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getLatestArticles.failure());
  }
}

function* runGetArticle(action: Model.GetArticleStartAction) {
  const id = action.payload;
  const handler = API.getArticle;
  const { article, error } = yield call(handler, id);
  if (article && !error) {
    yield put(getArticle.success(article));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getArticle.failure());
  }
}

export function* watchArticle() {
  yield takeLatest(ActionTypes.CREATE_ARTICLE_START, runCreateArticle);
  yield takeLatest(
    ActionTypes.GET_SLIDE_SHOW_ARTICLES_START,
    runGetSlideShowArticles
  );
  yield takeLatest(ActionTypes.GET_LATEST_ARTICLES_START, runGetLatestArticles);
  yield takeLatest(ActionTypes.GET_ARTICLE_START, runGetArticle);
}

export default function* rootSaga() {
  yield all([fork(watchArticle)]);
}
