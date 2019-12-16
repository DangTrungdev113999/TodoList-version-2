import { fork, take, call, put, delay } from 'redux-saga/effects';

import * as taskTypes from './../constants/task';
import { getLists } from './../apis/task';
import { fetchListTaskSuccess, fetchListTaskFailed } from './../actions/task';
import { STATUS_CODE } from './../constants/index';
import { showLoading, hideLoading } from './../actions/ui';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const response = yield call(getLists);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(error));
    }

    yield delay(1000);
    yield put(hideLoading());
  }
}

function* wathCreateTaskAction() {
  console.log('watch creact list task');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(wathCreateTaskAction);
}

export default rootSaga;
