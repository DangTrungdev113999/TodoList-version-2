import * as taskType from '../constants/task';

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

export const searchTask = keyword => ({
  type: taskType.SEARCH_TASK,
  payload: {
    keyword,
  },
});

export const searchTaskSuccess = data => ({
  type: taskType.SEARCH_TASK_SUCCESS,
  payload: {
    data,
  },
});
