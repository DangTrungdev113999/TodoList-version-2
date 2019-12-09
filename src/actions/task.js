import * as taskApis from './../apis/task';

export const fetchListTask = () => {
  return dispatch => {
    taskApis
      .getLists()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
};
