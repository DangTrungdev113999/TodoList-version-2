/* eslint-disable no-shadow */
import * as taskTypes from '../constants/task';
import { toastError } from '../helpers/ToasifyHelper';

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
    case taskTypes.SEARCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
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
        taskEdit: {
          title: task ? task.title : null,
          description: task ? task.description : null,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
