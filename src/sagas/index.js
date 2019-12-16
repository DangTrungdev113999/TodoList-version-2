import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';

import * as taskTypes from '../constants/task';
import { getLists } from '../apis/task';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  searchTaskSuccess,
} from '../actions/task';
import { STATUS_CODE } from '../constants/index';
import { showLoading, hideLoading } from '../actions/ui';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const response = yield call(getLists);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }

    yield delay(500);
    yield put(hideLoading());
  }
}

function* searchTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(item =>
    item.titles
      .trim()
      .toLowerCase()
      .includes(keyword.trim().toLowerCase()),
  );
  yield put(searchTaskSuccess(filteredTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga);
}

export default rootSaga;
