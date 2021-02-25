<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/home" exact>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <span @click="logout" class="nav-link pointer"> Logout </span>
        </li>
      </ul>
      <span class="navbar-text">{{ user.name }}</span>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
      return {
        user: {
          name: 'Mohana Devarasetty'
        }
      }
    },
    methods: {
      logout() {
        this.$router.push('/login')
      }
    }
}
</script>

<style>
</style>