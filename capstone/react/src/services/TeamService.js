import axios from 'axios';

const API_URL = '/api/teams';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  create(team) {
    return axios.post(API_URL, team);
  },
  update(id, team) {
    return axios.put(`${API_URL}/${id}`, team);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
