import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import {
  createArticle,
  updateArticle,
  deleteArticle,
  getSlideShowArticles,
  getLatestArticles,
  getArticle,
  getArticlesByTag,
  getArticles,
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
  if(success && !error) {
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

function* runUpdateArticle(action: Model.UpdateArticleStartAction) {
  const data = action.payload;
  const handler = API.updateAtricle;
  const { success, error } = yield call(handler, data);
  if(success && !error) {
    const payload = {
      type: "success",
      message: "記事を更新しました"
    };
    yield put(updateArticle.success());
    yield put(addFlashMessage(payload));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(updateArticle.failure());
  }
}

function* runDeleteArticle(action: Model.DeleteArticleStartAction) {
  const data = action.payload;
  const handler = API.deleteAtricle;
  const { success, error } = yield call(handler, data);
  if(success && !error) {
    const payload = {
      type: "success",
      message: "記事を削除しました"
    };
    yield put(deleteArticle.success());
    yield put(addFlashMessage(payload));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(deleteArticle.failure());
  }
}

function* runGetSlideShowArticles(
  action: Model.GetSlideShowArticlesStartAction
) {
  const handler = API.getSlideShowArticles;
  const { articles, error } = yield call(handler);
  if(articles && !error) {
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
  if(articles && !error) {
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

function* runGetArticles(action: Model.GetArticlesStartAction) {
  const handler = API.getArticles;
  const { articles, error } = yield call(handler);
  if(articles && !error) {
    yield put(getArticles.success(articles));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getArticles.failure());
  }
}


function* runGetArticle(action: Model.GetArticleStartAction) {
  const id = action.payload;
  const handler = API.getArticle;
  const { article, error } = yield call(handler, id);
  if(article && !error) {
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

function* runGetArticlesByTag(action: Model.GetArticlesByTagStartAction) {
  const handler = API.getArticlesByTag;
  const tagId = action.payload;
  const { articlesByTag, error } = yield call(handler, tagId);
  if(articlesByTag && !error) {
    yield put(getArticlesByTag.success(articlesByTag));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getArticlesByTag.failure());
  }
}

export function* watchArticle() {
  yield takeLatest(ActionTypes.CREATE_ARTICLE_START, runCreateArticle);
  yield takeLatest(ActionTypes.UPDATE_ARTICLE_START, runUpdateArticle);
  yield takeLatest(ActionTypes.DELETE_ARTICLE_START, runDeleteArticle);
  yield takeLatest(
    ActionTypes.GET_SLIDE_SHOW_ARTICLES_START,
    runGetSlideShowArticles
  );
  yield takeLatest(ActionTypes.GET_LATEST_ARTICLES_START, runGetLatestArticles);
  yield takeLatest(ActionTypes.GET_ARTICLES_START, runGetArticles);
  yield takeLatest(ActionTypes.GET_ARTICLE_START, runGetArticle);
  yield takeLatest(ActionTypes.GET_ARTICLES_BY_TAG_START, runGetArticlesByTag);
}

export default function* rootSaga() {
  yield all([fork(watchArticle)]);
}
