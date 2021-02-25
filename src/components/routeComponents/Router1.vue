<template>
  <div>
    <p class="textCenterAlign">Profile Page</p>
    <hello-world/>
    <button id="show-modal" @click="open">Show Modal</button>
    <div v-if="showModal">
      <alert-component
        :headerTitle="header"
        :message="body"
        :footer="footer"
        @close="close"
      />
    </div>
  </div>
</template>

<script>
import  AlertComponent  from 'dialogue-box'

import 'dialogue-box/dist/dialogue-box.css';

export default {
  name: "Router1",
  data() {
    return {
      showModal: false,
      header: "Test Header",
      body: "Test Message",
      footer: "Test Footer",
    };
  },
  components: {
    AlertComponent,
  },
  methods: {
    open() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    }
  },
  computed: {
    // this.showModal = false;
  }
};
</script>

<style scoped>

</style>