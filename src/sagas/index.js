/* eslint-disable no-underscore-dangle */
import {
  call,
  put,
  delay,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { STATUS, STATUS_CODE } from '../constants/index';

import * as taskTypes from '../constants/task';
import { getLists, addTask, updateTask, deleteTask } from '../apis/task';
import { toastSuccess } from '../helpers/ToasifyHelper';

import {
  fetchListTask,
  fetchListTaskSuccess,
  fetchListTaskFailed,
  addTaskSuccess,
  addTaskFailed,
} from '../actions/task';

import { showLoading, hideLoading } from '../actions/ui';
import { hideModal, showModal } from '../actions/modal';

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
  yield put(hideLoading());
}

function* searchTaskSaga({ payload }) {
  yield delay(1000);
  const { keyword } = payload;
  yield put(fetchListTask(keyword));
}

function* addTaskSaga({ payload }) {
  yield put(showLoading());
  const response = yield call(addTask, { ...payload, status: STATUS[0].value });
  if (response.status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(response.data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(response.data));
  }
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const taskEdit = yield select(state => state.task.taskEdit);
  yield put(showLoading());
  const response = yield call(updateTask, payload, taskEdit._id);
  if (response.status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTask());
    yield put(hideModal());
    toastSuccess('Update successful');
  } else {
    yield put(showModal());
    toastSuccess('Update failed');
  }
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const response = yield call(deleteTask, id);
  if (response.status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTask());
    toastSuccess('Delete successful');
  } else {
    toastSuccess('Delete failed');
  }
}

function* rootSaga() {
  yield takeEvery(taskTypes.FETCH_TASK, fetchListTaskSaga);
  yield takeLatest(taskTypes.SEARCH_TASK, searchTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeEvery(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeEvery(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
