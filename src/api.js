import axios from "axios";

async function get(url) {
  const response = await axios.get(url);
  return response.data;
}

async function post(url, obj) {
  const response = await axios.post(url, obj);
  return response.data;
}

async function put(url, obj) {
  const response = await axios.put(url, obj);
  return response.data;
}

async function remove(url) {
  const response = await axios.delete(url);
  return response.data;
}

const api = {
  get,
  post,
  put,
  remove,
};

export default api;
