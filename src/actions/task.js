import * as taskType from './../constants/task';

export const fetchListTask = () => ({
  type: taskType.FETCH_TASK,
});

export const fetchListTaskSuccess = data => ({
  type: taskType.FETCH_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListTaskFailed = error => ({
  type: taskType.FETCH_TASK_FAILED,
  payload: {
    error,
  },
});
