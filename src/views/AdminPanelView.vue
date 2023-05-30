<template>
  <div class="container bg-light mb-5 pb-5" style="opacity: 0.85">
    <h1>Admin Panel Kullanıcı ekle sil</h1>

    <div class="form-group">
      <input type="text" v-model="searchKeyword" class="form-control" placeholder="Search" @input="filterUsers">
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in visibleUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>
            <button class="btn btn-primary" @click="editUser(user.id)">Edit</button>
            <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <form v-if="editingUserId === null" @submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newUser.name" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="newUser.email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="newUser.password" class="form-control">
      </div>
      <button type="submit" class="btn btn-success mt-2">Create User</button>
    </form>

    <form v-else @submit.prevent="updateUser">
      <div class="form-group">
        <label for="edit-name">Name:</label>
        <input type="text" id="edit-name" v-model="editedUser.name" class="form-control">
      </div>
      <div class="form-group">
        <label for="edit-email">Email:</label>
        <input type="email" id="edit-email" v-model="editedUser.email" class="form-control">
      </div>
      <div class="form-group">
        <label for="edit-password">Password:</label>
        <input type="password" id="edit-password" v-model="editedUser.password" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Update User</button>
      <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
    </form>

    <button class="btn btn-primary mt-4" @click="showNextUsers">Show Next Users</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: [
        { id: 1, name: 'John John  Doe', email: 'john@example.com', password: 'password123' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'securepass' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', password: '123456' },
      ],
      newUser: { name: '', email: '', password: '' },
      editingUserId: null,
      editedUser: { name: '', email: '', password: '' },
      searchKeyword: '',
      shownUsers: 5,
    };
  },
  computed: {
    filteredUsers() {
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase();
        return this.users.filter(
          (user) =>
            user.name.toLowerCase().includes(keyword) ||
            user.email.toLowerCase().includes(keyword) ||
            user.password.toLowerCase().includes(keyword)
        );
      } else {
        return this.users;
      }
    },
    visibleUsers() {
      return this.filteredUsers.slice(0, this.shownUsers);
    },
  },
  methods: {
    editUser(userId) {
      console.log('Edit user:', userId);
      this.editingUserId = userId;
      const user = this.users.find((user) => user.id === userId);
      if (user) {
        this.editedUser = { ...user };
      }
    },
    deleteUser(userId) {
      console.log('Delete user:', userId);
      const index = this.users.findIndex((user) => user.id === userId);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    },
    createUser() {
      console.log('Create user:', this.newUser);
      const newUser = { ...this.newUser, id: this.users.length + 1 };
      this.users.push(newUser);
      this.newUser = { name: '', email: '', password: '' };
    },
    updateUser() {
      console.log('Update user:', this.editedUser);
      const index = this.users.findIndex((user) => user.id === this.editingUserId);
      if (index !== -1) {
        this.users[index] = { ...this.editedUser };
        this.editingUserId = null;
        this.editedUser = { name: '', email: '', password: '' };
      }
    },
    cancelEdit() {
      this.editingUserId = null;
      this.editedUser = { name: '', email: '', password: '' };
    },
    filterUsers() {
      // Arama otomatik olarak computed özelliği güncelleyecektir
    },
    showNextUsers() {
      this.shownUsers += 5;
    },
  },
};
</script>

<style>
</style>
