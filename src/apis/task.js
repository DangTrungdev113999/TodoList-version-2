import axiosService from '../service/axiosService';
import { API_ENDPOINT } from '../constants/index';

const url = 'tasks';

export const getLists = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
