
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
        <button class="btn btn-primary" @click="editComment(comment.id)">Edit</button>
        <button class="btn btn-danger" @click="deleteComment(comment.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>

<form v-if="editingCommentId === null" @submit.prevent="createComment">
  <div class="form-group">
    <label for="commenter">Commenter:</label>
    <input type="text" id="commenter" v-model="newComment.commenter" class="form-control">
  </div>
  <div class="form-group">
    <label for="comment">Comment:</label>
    <input type="text" id="comment" v-model="newComment.comment" class="form-control">
  </div>
  <button type="submit" class="btn btn-success mt-2">Create Comment</button>
</form>

<form v-else @submit.prevent="updateComment">
  <div class="form-group">
    <label for="edit-commenter">Commenter:</label>
    <input type="text" id="edit-commenter" v-model="editedComment.commenter" class="form-control">
  </div>
  <div class="form-group">
    <label for="edit-comment">Comment:</label>
    <input type="text" id="edit-comment" v-model="editedComment.comment" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Update Comment</button>
  <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
</form>
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
          newComment: { commenter: '', comment: '' },
          editingCommentId: null,
          editedComment: { commenter: '', comment: '' },
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
        editComment(commentId) {
          console.log('Edit comment:', commentId);
          this.editingCommentId = commentId;
          const comment = this.comments.find(comment => comment.id === commentId);
          if (comment) {
            this.editedComment = { ...comment };
          }
        },
        deleteComment(commentId) {
          console.log('Delete comment:', commentId);
          const index = this.comments.findIndex(comment => comment.id === commentId);
          if (index !== -1) {
            this.comments.splice(index, 1);
          }
        },
        createComment() {
          console.log('Create comment:', this.newComment);
          const newComment = { ...this.newComment, id: this.comments.length + 1 };
          this.comments.push(newComment);
          this.newComment = { commenter: '', comment: '' };
        },
        updateComment() {
          console.log('Update comment:', this.editedComment);
          const index = this.comments.findIndex(comment => comment.id === this.editingCommentId);
          if (index !== -1) {
            this.comments[index] = { ...this.editedComment };
            this.editingCommentId = null;
            this.editedComment = { commenter: '', comment: '' };
          }
        },
        cancelEdit() {
          this.editingCommentId = null;
          this.editedComment = { commenter: '', comment: '' };
        },
        filterComments() {
          // Automatic filtering will update the computed property
        },
      }
    };
  </script>
  <style>
  
  </style>