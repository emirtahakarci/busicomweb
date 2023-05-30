<template>
  <div class="container bg-light mb-5 pb-5" style="opacity: 0.85">
    <h1>User Comments</h1>
    <div class="form-group">
      <input type="text" v-model="searchKeyword" class="form-control" placeholder="Search" @input="filterComments">
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Commenter</th>
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in filteredComments" :key="comment.id">
          <td>{{ comment.id }}</td>
          <td>{{ comment.commenter }}</td>
          <td>{{ comment.comment }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteComment(comment.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      comments: [
        { id: 1, commenter: 'John Doe', comment: 'This is a great website!' },
        { id: 2, commenter: 'Jane Smith', comment: 'I love the design.' },
        { id: 3, commenter: 'Bob Johnson', comment: 'Could use some improvements.' },
      ],
      searchKeyword: '',
    };
  },
  computed: {
    filteredComments() {
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        return this.comments.filter(comment =>
          comment.commenter.toLowerCase().includes(keyword) ||
          comment.comment.toLowerCase().includes(keyword)
        );
      } else {
        return this.comments;
      }
    }
  },
  methods: {
    deleteComment(commentId) {
      console.log('Delete comment:', commentId);
      const index = this.comments.findIndex(comment => comment.id === commentId);
      if (index !== -1) {
        this.comments.splice(index, 1);
      }
    },
    filterComments() {
      // Automatic filtering will update the computed property
    },
  },
};
</script>

<style>
/* Stil kuralları buraya gelebilir */
</style>
