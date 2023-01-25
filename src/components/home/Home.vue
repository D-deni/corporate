<template>
  <div class="home relative">
    <img class="img-bg" src="/public/img/bg-header-two.jpg" alt="very cool bg">
    <v-navbar></v-navbar>
    <v-home-content></v-home-content>
  </div>
</template>

<script>
import vNavbar from '../ui/Navbar.vue'
import vHomeContent from '../home/homeContent.vue' 
  export default {
    components: {
      vNavbar,
      vHomeContent,
    }
  }
</script>

<style lang="scss" >
 .img-bg {
  position: absolute;
 }
</style>