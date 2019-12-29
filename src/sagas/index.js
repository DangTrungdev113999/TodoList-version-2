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
  updateTaskSuccess,
  updateTaskFaild,
} from '../actions/task';

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

  yield delay(100);
  yield put(hideLoading());
}

function* searchTaskSaga({ payload }) {
  yield delay(100);
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
  yield delay(100);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const taskEdit = yield select(state => state.task.taskEdit);
  yield put(showLoading());
  const response = yield call(updateTask, payload, taskEdit.id);
  if (response.status === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(response.data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFaild(response.data));
  }
  yield delay(100);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const response = yield call(deleteTask, id);
  if (response.status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTask());
    toastSuccess('Xóa thành công');
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
