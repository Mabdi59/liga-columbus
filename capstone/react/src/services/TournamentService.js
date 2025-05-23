import axios from 'axios';

const API_URL = '/api/tournaments';

export default {
  getAll() {
    return axios.get(API_URL);
  },
  getById(id) {
    return axios.get(`${API_URL}/${id}`);
  },
  create(tournament) {
    return axios.post(API_URL, tournament);
  },
  update(id, tournament) {
    return axios.put(`${API_URL}/${id}`, tournament);
  },
  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
};
