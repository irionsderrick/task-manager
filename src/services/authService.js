// authService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/users';

const register = (username, password) => {
  return axios.post(`${API_URL}/register`, { username, password });
};

const login = (username, password) => {
  return axios.post(`${API_URL}/authenticate`, { username, password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout
};
