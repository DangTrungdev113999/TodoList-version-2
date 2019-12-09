import axios from 'axios';
import { throws } from 'assert';

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(err) {
    return Promise.reject(err);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new AxiosService();
