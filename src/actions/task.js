import * as taskType from '../constants/task';
import { STATUS } from '../constants';

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

export const addTask = (title, description) => ({
  type: taskType.ADD_TASK,
  payload: {
    title,
    description,
    status: STATUS[0].value,
  },
});

export const addTaskSuccess = data => ({
  type: taskType.ADD_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTaskFailed = error => ({
  type: taskType.ADD_TASK_FAILED,
  payload: {
    error,
  },
});
