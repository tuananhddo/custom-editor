import getAxios from './axiosConfig';
import {DEFAULT_URL} from './constants';

export default {

  getUploadedModelList(){
    return getAxios().get(`${DEFAULT_URL}/models`)
  }
}
