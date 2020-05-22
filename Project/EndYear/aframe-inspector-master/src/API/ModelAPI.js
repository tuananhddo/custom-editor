import getAxios from './axiosConfig';
import {DEFAULT_MODEL_URL} from './constants';

export default {

  getUploadedModelList () {
    return getAxios().get(`${DEFAULT_MODEL_URL}`);
  },
  uploadModel (data) {
    return getAxios().post(`${DEFAULT_MODEL_URL}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
