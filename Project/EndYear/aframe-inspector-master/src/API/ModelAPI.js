import getAxios, {DEFAULT_URL} from './axiosConfig';

export default {

  getUploadedModelList(){
    return getAxios().get(`${DEFAULT_URL}/models`)
  }
}
