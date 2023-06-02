import axios from 'axios';
import config from '../config.json';

class ApiService {
  static config = null;

  constructor() {
    if (!ApiService.config) {
      ApiService.config = config;
    }

    const { apiUrl } = ApiService.config || {};
    this.baseUrl = apiUrl || 'http://localhost:4000/teamtalkers_api/';
    this.headers = {};
    this.authToken = null;
  }

  async request(method, url, data = null, headers = {}) {
    if (!url.includes('auth')) {
      const token = sessionStorage.getItem('token');
      if (token) {
        await this.get('auth/check');
      } else {
        throw new Error('HTTP 401 Unauthorized');
      }
    }

    headers = {
      'Content-Type': 'application/json',
      ...this.headers,
      ...headers,
    };

    if (this.authToken) {
      headers.Authorization = `Bearer ${this.authToken}`;
    }

    const options = {
      method,
      headers,
      data: data ? JSON.stringify(data) : null,
      url: this.baseUrl + url,
    };

    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      throw new Error(`HTTP ${error.response.status} - ${error.response.statusText}`);
    }
  }

  async get(url, headers = {}) {
    return this.request('get', url, null, headers);
  }

  async post(url, data = {}, headers = {}) {
    return this.request('post', url, data, headers);
  }

  async put(url, data = {}, headers = {}) {
    return this.request('put', url, data, headers);
  }

  async delete(url, headers = {}) {
    return this.request('delete', url, null, headers);
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }

  setHeaders(headers) {
    this.headers = headers;
  }

  setAuthToken(authToken) {
    this.authToken = authToken;
  }
}

export default new ApiService();