<template>
 <div class="z-50 sticky top-1 bg-opacityBg">
  <div class="max-w-container w-full mx-auto px-3 py-4 text-white  flex items-center justify-between">
    <div>
      <h3 class="text-3xl font-bold">Logo</h3>
    </div>
    <div>
      <ul class="flex justify-between max-lg:py-4">
        <li v-for="(link) in linksList"
        class="px-9">
         <a href="#">
          {{link.name}}
         </a>
        </li>
      </ul>
    </div>
    <div>
      <v-button>Регистрация</v-button>
    </div>
    <div
        @click="open = !open"
        class="block w-5 absolute right-6 top-1/2 transform -translate-y-1/2 lg:hidden"
      >
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out"
          :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
        ></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out"
          :class="{ 'opacity-0': open }"
        ></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-6 bg-white transform transition duration-500 ease-in-out"
          :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
        ></span>
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
        open: false,
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