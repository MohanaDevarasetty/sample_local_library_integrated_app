<template>
  <div>
    <Navbar />
      <div>
        <h1 class="textCenterAlign" @click="open">Home Page</h1>
        <ul>
          <li
            v-bind:key="homePageNavigator.id"
            v-for="homePageNavigator in homePageNavigators"
          >
            <router-link
              class="nav-link"
              v-bind:to="'/home/' + homePageNavigator.link"
              >{{ homePageNavigator.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import Navbar from "../../components/Navbar.vue";

export default {
  name: "HomePage",
  data() {
    return {
      homePageNavigators: [
        {
          name: "Profile",
          id: "1",
          link: "profile",
        },
        {
          name: "Payments",
          id: "2",
          link: "payments",
        },
        {
          name: "Settings",
          id: "3",
          link: "settings",
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    open () {
    this.$vm2.open('modal-1')
  },
  close () {
    this.$vm2.close('modal-1')
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
