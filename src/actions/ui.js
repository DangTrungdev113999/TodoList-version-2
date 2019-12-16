import * as uiTypes from '../constants/ui';

export const showLoading = () => ({
  type: uiTypes.GLOBAL_SHOW_LOADING,
});

export const hideLoading = () => ({
  type: uiTypes.GLOBAL_HIDE_LOADING,
});
