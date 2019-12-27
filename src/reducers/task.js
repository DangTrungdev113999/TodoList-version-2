/* eslint-disable no-shadow */
import { toast } from 'react-toastify';
import * as taskTypes from '../constants/task';
import { toastError, toastSuccess } from '../helpers/ToasifyHelper';

const initalState = {
  listTask: [],
  taskEdit: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case taskTypes.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }

    case taskTypes.FETCH_TASK_SUCCESS: {
      return {
        ...state,
        listTask: action.payload.data,
      };
    }
    case taskTypes.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskTypes.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: [data].concat(state.listTask),
      };
    }

    case taskTypes.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    case taskTypes.SET_TASK_EDIT: {
      const { task } = action.payload;
      return {
        ...state,
        taskEdit: task,
      };
    }

    case taskTypes.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      const index = state.listTask.findIndex(list => list.id === data.id);
      let newList = state.listTask;
      if (index !== -1) {
        newList = [
          ...state.listTask.slice(0, index),
          data,
          ...state.listTask.slice(index + 1),
        ];
        toastSuccess('Cập nhật thành công');
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
