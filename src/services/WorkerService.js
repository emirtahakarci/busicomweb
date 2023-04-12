import axios from 'axios';

const WorkerService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  get(resource, slug = '') {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[WorkerService] Get ${resource} ${slug} ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  delete(resource, slug) {
    return axios.delete(`${resource}/${slug}`);
  }
};

export default WorkerService;