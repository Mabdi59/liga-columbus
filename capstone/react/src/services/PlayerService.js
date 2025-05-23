import axios from 'axios';

const API_URL = '/api/players';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  create(player) {
    return axios.post(API_URL, player);
  },
  update(id, player) {
    return axios.put(`${API_URL}/${id}`, player);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
