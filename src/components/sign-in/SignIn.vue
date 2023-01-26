<template>
  <div class="sign-in h-screen ">
    <div class="max-w-container h-full ml-auto px-4 flex justify-center items-center max-md:flex-col">
      <div class="w-full"></div>
      <div class="w-full text-center bg-gradient-to-t  from-[#7e7e7e]  border-[1px] border-gray-400 rounded-md ">
        <h1 class="font-bold text-3xl uppercase text-gray-700 my-5">Добро пожаловать!</h1>
        <form class="flex flex-col px-10 py-20">
            <input type="text" name="" value="" placeholder="Имя пользователя:"
            class=" h-16 outline-none rounded-2xl pl-5"
            >
            <input type="password" name="" value="" placeholder="Пароль:"
            class="my-10 h-16 outline-none rounded-2xl pl-5"
            >
            <v-button class="mx-auto w-full text-xl text-white uppercase font-bold border-opacity-[0.3]	border-white">
              <router-link :to="{name: ''}">Войти</router-link>
            </v-button>
            <router-link :to="{name: 'index'}" class="pt-3 hover:text-gray-600 uppercase transition-all duration-150">Главная</router-link>
        </form> 
      </div>
    </div>
  </div>
</template>

<script>
  import vButton from '../ui/Buttons.vue'
  export default {
    components: {
      vButton
    }
  }
</script>

<style lang="scss" scoped>
  .sign-in {
    background: url('/public/img/bg-sign.jpg') no-repeat center top / cover;
   
  }
</style>