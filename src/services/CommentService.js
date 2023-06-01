import ApiService from './ApiService'

class CommentService {
  constructor() {
    this.endpoint = 'comments'
  }

  async getCommentDashboard() {
    const response = await ApiService.get(this.endpoint + '/getCommentDashboard')
    return response
  }

  async getUserCommentCounts() {
    const response = await ApiService.get(this.endpoint + 'getUserCommentCounts')
    return response
  }
  async getUserCommentCountsForYou() {
    const response = await ApiService.get(this.endpoint + 'getUserCommentCountsForYou'+ "?accessToken=" + localStorage.getItem('token'))
    return response
  }
  async getWorkerCommentCountsForYou() {
    const response = await ApiService.get(this.endpoint + 'getWorkerCommentCountsForYou')
    return response
  }
  async getUserCommentCountsByYou() {
    const response = await ApiService.get(this.endpoint + 'getUserCommentCountsByYou' + "?accessToken=" + localStorage.getItem('token'))
    return response
  }
  async getWorkerCommentCountsByYou() {
    const response = await ApiService.get(this.endpoint + 'getWorkerCommentCountsByYou')
    return response
  }
  async getUserComment() {
    const response = await ApiService.get(this.endpoint + 'getUserComment')
    return response
  }
}

export default new CommentService()
