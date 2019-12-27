import queryString from 'query-string';
import axiosService from '../service/axiosService';
import { API_ENDPOINT } from '../constants/index';

const url = 'tasks';

export const getLists = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${queryString.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTask = (data, taskId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
};
