import ApiService from './ApiService'

class WorkerService {
  constructor() {
    this.endpoint = 'workers'
  }

  async getAllWorkers() {
    const response = await ApiService.get(this.endpoint)
    return response
  }

  async createWorker(workerData) {
    const response = await ApiService.post(this.endpoint, workerData)
    return response
  }

  async updateWorker(workerId, workerData) {
    const url = `${this.endpoint}/${workerId}`
    const response = await ApiService.put(url, workerData)
    return response
  }

  async deleteWorker(workerId) {
    const url = `${this.endpoint}/${workerId}`
    const response = await ApiService.delete(url)
    return response
  }
}

export default new WorkerService()
