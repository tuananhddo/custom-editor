import getAxios from './axiosConfig';
import {DEFAULT_URL} from './constants';

export default {

  getUploadedModelList () {
    return getAxios().get(`${DEFAULT_URL}/models`);
  },
  uploadModel (data) {
    return getAxios().post(`${DEFAULT_URL}/models`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
