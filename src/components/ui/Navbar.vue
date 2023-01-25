<template>
 <div class="z-50 sticky top-1 bg-opacityBg">
  <div class="max-w-container w-full mx-auto px-4 py-4 text-white  flex items-center justify-between max-lg:flex-col  ">
    <div>
      <h3 class="text-3xl font-bold">Logo</h3>
    </div>
    <div>
      <ul class="flex justify-between max-lg:py-4">
        <li v-for="(link) in linksList"
        class="px-9">
         <a href="#">
          {{ link.name }}
         </a>
        </li>
      </ul>
    </div>
    <div>
      <v-button>Регистрация</v-button>
    </div>
  </div>
  
 </div>
 
</template>

<script>
  import vButton from './Buttons.vue'
  export default {
    components: {
      vButton
    },
    data() {
      return {
        linksList: [
         {name:'Главная', link: '#'}, 
         {name:'О нас', link: '#'}, 
         {name:'FAQ', link: '#'}, 
         {name:'Контакты', link: '#'}, 
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>