import * as taskApis from './../apis/task';
import * as taskType from './../constants/task';

export const fetchListTask = () => {
  return {
    type: taskType.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskType.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskType.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchListTaskApi = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApis
      .getLists()
      .then(res => dispatch(fetchListTaskSuccess(res.data)))
      .catch(err => dispatch(fetchListTaskFailed(err)));
  };
};
