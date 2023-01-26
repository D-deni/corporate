<template>
  <div class="home">
    <v-navbar></v-navbar>
    <div class=" pb-10 w-full">
      <v-home-content></v-home-content>
    </div>
  </div>
  <div class="about">
    <div class="bg-gray-100">
      <v-about></v-about>
    </div>
  </div>
  <div class="about">
    <div class="bg-gray-100">
      <v-staff></v-staff>
    </div>
  </div>
  <div class="stats">
    <div class="bg-gray-100">
      <v-stats></v-stats>
    </div>
  </div>
  <div class="footer">
    <v-footer></v-footer>
  </div>
</template>

<script>
import vNavbar from '../ui/Navbar.vue'
import vFooter from '../ui/Footer.vue'
import vHomeContent from '../home/homeContent.vue' 
import vAbout from '../home/about/About.vue'
import vStaff from '../home/staff/Staff.vue'
import vStats from './stats/Stats.vue'
  export default {
    components: {
      vNavbar,
      vFooter,
      
      vHomeContent,
      vAbout,
      vStaff,
      vStats
    }
  }
</script>

<style lang="scss" >
  .home {
    background: url('/public/img/bg-header-two.jpg') no-repeat center top / cover;
  }
 
</style>