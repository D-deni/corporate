<template>
  <Teleport to="body"
    class="fixed left-0 w-full top-0 z-50 bg-opacityBg"
  >
  <div
  class="fixed left-0 w-full top-0 z-50 bg-opacityBg"
  >
    <div class="">
      <div
        class="max-w-container flex justify-between mx-auto py-8 px-4  top-0"
      >
        <div
          class="font-gilroy text-xl text-white flex items-center justify-center relative z-50"
        >
          <router-link :to="{ name: 'index' }"> Logo </router-link>
        </div>
        <nav class="flex items-center">
          <ul
            class="flex justify-between max-md:justify-between max-md:h-full max-md:pb-[110px] duration-300 transition-all items-center max-md: max-md:w-full max-md:flex-col left-0 text-center max-md:bg-opacityBg"
            :class="{
              'top-[92px] max-h-screen max-md:fixed': open,
              '-top-full max-md:-translate-y-full max-md:absolute': !open,
            }"
          >
            <li
              class="text-white text-sm font-gilroy mr-10 max-md:mr-0 cursor-pointer max-md:pt-5"
            >
              <router-link :to="{ name: '' }">
                О компании
              </router-link>
            </li>
            <li
              class="text-white text-sm font-gilroy mr-10 max-md:mr-0 cursor-pointer"
            >
              Команда
            </li>
            <li
              class="text-white text-sm font-gilroy mr-10 max-md:mr-0 cursor-pointer"
            >
              <router-link :to="{ name: '' }"> Услуги </router-link>
            </li>
            <li
              class="text-white text-sm font-gilroy mr-10 max-md:mr-0 cursor-pointer"
            >
              Новости
            </li>
            <li
              class="text-white text-sm font-gilroy mr-10 max-md:mr-0 cursor-pointer"
            >
             <a href="/faq">FAQ</a>
            </li>
            <li class="text-white text-sm font-gilroy cursor-pointer">
              <a href="/contacts"> Контакты </a>
            </li>
            <li
              class=" text-white text-sm font-gilroy px-9 cursor-pointer rounded-md font-bold"
            >
             <router-link :to="{name: 'sign-in'}"><v-button> Войти </v-button></router-link>
            </li>
          </ul>
        </nav>
       
      <div
          @click="open = !open"
          class="w-5 absolute right-6 top-1/2 transform -translate-y-1/2 hidden max-md:block"
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
  </div>
  </Teleport>
 
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
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>