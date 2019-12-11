import * as taskTypes from './../constants/task';

const initalState = {
  listTask: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case taskTypes.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case taskTypes.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
