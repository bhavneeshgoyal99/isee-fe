import axios from "axios";

export const httpGet = async (url, param, headers = {}) => {
  try {
    const request = await axios.get(url);

    console.log("request", request);
  } catch (e) {
    return false;
  }
};

export const httpPost = async (url, param, headers = {}) => {
  try {
    const request = await axios.post(url, param);

    return request.data;
  } catch (e) {
    return false;
  }
};
