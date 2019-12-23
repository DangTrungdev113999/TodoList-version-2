import * as taskType from '../constants/task';
import { STATUS } from '../constants';

export const fetchListTask = keyword => ({
  type: taskType.FETCH_TASK,
  payload: {
    q: keyword,
  },
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

export const setTaskEdit = task => ({
  type: taskType.SET_TASK_EDIT,
  payload: {
    task,
  },
});
