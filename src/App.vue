<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // Navbar
  }
}
</script>

<style>


.textCenterAlign {
  text-align: center;
}

.footer {
  padding: 20px 0;
  /* background-color: #f2f3f8; */
}

.pointer {
  cursor: pointer;
  }


@media (max-width: 1199px) {
  .sticky .footer {
    padding-bottom: 100px;
  }


}
</style>
