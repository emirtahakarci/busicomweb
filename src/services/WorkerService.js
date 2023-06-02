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
    const response = await ApiService.get(this.endpoint + '/getWorkerCount')
    return response
  }

  async getWorker(workerId) {
    const response = await ApiService.get(this.endpoint + '/getWorker' + "?workerId=" + workerId)
    return response
  }
  async getUserWorker() {
    const response = await ApiService.get(this.endpoint + '/getUserWorker')
    return response
  }
  async getUserWorkerResetPassword(newPassword) {
    const response = await ApiService.get(this.endpoint + '/getUserWorkerResetPassword' + "?newPassword=" +newPassword)
    return response
  }
}


export default new WorkerService()
