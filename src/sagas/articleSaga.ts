import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import {
  createArticle,
  updateArticle,
  changeArticleGoodCount,
  deleteArticle,
  getSlideShowArticles,
  getLatestArticles,
  getArticlesByGoodCount,
  getArticle,
  getPrevArticle,
  getNextArticle,
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

function* runChangeArticleGoodCount(action: Model.ChangeArticleGoodCountStartAction) {
  const articleId = action.payload.articleId;
  const isDone = action.payload.isDone;
  const handler = API.changeArticleGoodCount;
  const { success, error } = yield call(handler, articleId, isDone);
  if(success && !error) {
    const payload = {
      type: "success",
      message: "記事にイイネしました"
    };
    yield put(changeArticleGoodCount.success());
    yield put(addFlashMessage(payload));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(changeArticleGoodCount.failure());
  }
}

function* runDeleteArticle(action: Model.DeleteArticleStartAction) {
  const articleId = action.payload;
  const handler = API.deleteAtricle;
  const { success, error } = yield call(handler, articleId);
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
  let date = new Date('2100-12-24');
  if(action.payload) {
    date = action.payload;
  }
  const handler = API.getLatestArticles;
  const { articles, error } = yield call(handler, date);
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

function* runGetArticlesByGoodCount(action: Model.GetArticlesByGoodCountStartAction) {
  const handler = API.getArticlesByGoodCount;
  const { articles, error } = yield call(handler);
  if(articles && !error) {
    yield put(getArticlesByGoodCount.success(articles));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getArticlesByGoodCount.failure());
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

function* runGetPrevArticle(action: Model.GetPrevArticleStartAction) {
  const date = action.payload;
  const handler = API.getPrevArticle;
  const { article, error } = yield call(handler, date);
  if(article && !error) {
    yield put(getPrevArticle.success(article));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    // ユーザーには表示させないため
    // yield put(addFlashMessage(payload));
    yield put(getPrevArticle.failure());
  }
}

function* runGetNextArticle(action: Model.GetNextArticleStartAction) {
  const date = action.payload;
  const handler = API.getNextArticle;
  const { article, error } = yield call(handler, date);
  if(article && !error) {
    yield put(getNextArticle.success(article));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    // ユーザーには表示させないため
    // yield put(addFlashMessage(payload));
    yield put(getNextArticle.failure());
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
  yield takeLatest(ActionTypes.CHANGE_ARTICLE_GOOD_COUNT_START, runChangeArticleGoodCount);
  yield takeLatest(ActionTypes.DELETE_ARTICLE_START, runDeleteArticle);
  yield takeLatest(
    ActionTypes.GET_SLIDE_SHOW_ARTICLES_START,
    runGetSlideShowArticles
  );
  yield takeLatest(ActionTypes.GET_LATEST_ARTICLES_START, runGetLatestArticles);
  yield takeLatest(ActionTypes.GET_ARTICLES_BY_GOOD_COUNT_START, runGetArticlesByGoodCount);
  yield takeLatest(ActionTypes.GET_ARTICLES_START, runGetArticles);
  yield takeLatest(ActionTypes.GET_ARTICLE_START, runGetArticle);
  yield takeLatest(ActionTypes.GET_PREV_ARTICLE_START, runGetPrevArticle);
  yield takeLatest(ActionTypes.GET_NEXT_ARTICLE_START, runGetNextArticle);
  yield takeLatest(ActionTypes.GET_ARTICLES_BY_TAG_START, runGetArticlesByTag);
}

export default function* rootSaga() {
  yield all([fork(watchArticle)]);
}
