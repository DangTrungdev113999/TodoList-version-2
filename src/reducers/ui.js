import * as uiTypes from './../constants/ui';

const initalState = {
  showLoading: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case uiTypes.GLOBAL_SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case uiTypes.GLOBAL_HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
