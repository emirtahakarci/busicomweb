class ApiService {
    static config = null;

  constructor() {
    if (!ApiService.config) {
      const fs = require('fs');
      ApiService.config = JSON.parse(fs.readFileSync('./config.json'));
    }

    const { apiUrl } = ApiService.config || {};
    this.baseUrl = apiUrl || 'http://localhost:4010/';
    this.headers = {};
    this.authToken = authToken || null;
  }
  
    async request(method, url, data = null, headers = {}) {
      headers = {
        'Content-Type': 'application/json',
        ...this.headers,
        ...headers
      }
  
      if (this.authToken) {
        headers.Authorization = `Bearer ${this.authToken}`
      }
  
      const options = {
        method,
        headers
      }
  
      if (data) {
        options.body = JSON.stringify(data)
      }
  
      const response = await fetch(this.baseUrl + url, options)
  
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`)
      }
  
      const responseData = await response.json()
  
      return responseData
    }
  
    async get(url, headers = {}) {
      return this.request('GET', url, null, headers)
    }
  
    async post(url, data = {}, headers = {}) {
      return this.request('POST', url, data, headers)
    }
  
    async put(url, data = {}, headers = {}) {
      return this.request('PUT', url, data, headers)
    }
  
    async delete(url, headers = {}) {
      return this.request('DELETE', url, null, headers)
    }
  
    setBaseUrl(baseUrl) {
      this.baseUrl = baseUrl
    }
  
    setHeaders(headers) {
      this.headers = headers
    }
  
    setAuthToken(authToken) {
      this.authToken = authToken
    }
  }
  
  export default new ApiService()
  