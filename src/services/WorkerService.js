import ApiService from './ApiService'

class WorkerService {
  constructor() {
    this.endpoint = 'workers'
  }

  async getAllWorkers() {
    const response = await ApiService.get(this.endpoint + '/getAllWorkers')
    return response
  }
  async getAllWorkersCount() {
    const response = await ApiService.get(this.endpoint + '/getAllWorkersCount')
    return response
  }

  async getWorker(workerId) {
    const response = await ApiService.get(this.endpoint + 'getWorker' + "?workerId=" + workerId)
    return response
  }
}

export default new WorkerService()
