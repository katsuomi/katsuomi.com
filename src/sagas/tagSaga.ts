import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// import constants
import * as ActionTypes from "constants/actionTypes";

// import actions
import { getTags } from "actions/tagAction";
import { addFlashMessage } from "actions/flashMessagesAction";

// import APIs
import * as API from "apis/tagAPI";

// import models
import * as Model from "models/tagModel";

function* runGetTags(action: Model.GetTagsStartAction) {
  const handler = API.getTags;
  const { tags, error } = yield call(handler);
  if (tags && !error) {
    yield put(getTags.success(tags));
  } else {
    const payload = {
      type: "failure",
      message: error.message
    };
    yield put(addFlashMessage(payload));
    yield put(getTags.failure());
  }
}

export function* watchTag() {
  yield takeLatest(ActionTypes.GET_TAGS_START, runGetTags);
}

export default function* rootSaga() {
  yield all([fork(watchTag)]);
}
