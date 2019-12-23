import {
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';

import * as taskTypes from '../constants/task';
import { getLists, addTask } from '../apis/task';

import {
  fetchListTask,
  fetchListTaskSuccess,
  fetchListTaskFailed,
  addTaskSuccess,
  addTaskFailed,
} from '../actions/task';
import { STATUS_CODE } from '../constants/index';
import { showLoading, hideLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';

function* fetchListTaskSaga(param) {
  const { payload } = param;
  yield put(showLoading());
  const response = yield call(getLists, payload);

  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTaskSuccess(data));
  } else {
    yield put(fetchListTaskFailed(data));
  }

  yield delay(500);
  yield put(hideLoading());
}

function* searchTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask(keyword));
}

function* addTaskSaga({ payload }) {
  yield put(showLoading());
  const response = yield call(addTask, payload);
  if (response.status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(response.data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(response.data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* rootSaga() {
  yield takeEvery(taskTypes.FETCH_TASK, fetchListTaskSaga);
  yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}

export default rootSaga;
