import axios from 'axios';

const API_URL = '/api/matches';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  create(match) {
    return axios.post(API_URL, match);
  },
  update(id, match) {
    return axios.put(`${API_URL}/${id}`, match);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
