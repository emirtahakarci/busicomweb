import ApiService from './ApiService'

class CommentService {
  constructor() {
    this.endpoint = 'comment'
  }

  async getAllCommentCount() {
    const response = await ApiService.get(this.endpoint + '/getCommentCount')
    return response
  }
  a
  async getUserCommentCountsForYou() {
    const response = await ApiService.get(this.endpoint + '/getUserCommentCount')
    return response
  }
  async getWorkerCommentCountsForYou() {
    const response = await ApiService.get(this.endpoint + '/getWorkerCommentCount')
    return response
  }
  async getUserCommentCountsByYou() {
    const response = await ApiService.get(this.endpoint + '/getMadeCommentCountByUser')
    return response
  }
  async getWorkerCommentCountsByYou() {
    const response = await ApiService.get(this.endpoint + '/getMadeCommentCountByWorker')
    return response
  }
  async getUserComment() {
    const response = await ApiService.get(this.endpoint + '/getMadeComment')
    return response
  }
  async getUserMakeComment(workerId, comment) {
    const response = await ApiService.get(this.endpoint + '/getMadeComment' + "?workerId=" + workerId + "&comment=" + comment)
    return response
  }
}

export default new CommentService()
