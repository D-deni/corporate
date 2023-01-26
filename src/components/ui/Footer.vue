<template>
  <div class="bg-slate-900 ">
      <div class="max-w-container h-full px-5 py-10 flex items-center max-md:flex-col">
        <div class="footer-column flex max-md:flex-col ">
          <div class="footer-block w-8/12 px-4 justify-center border-r-2 max-md:text-center max-md:border-r-0 max-md:border-b-2 max-md:pb-4 max-md:w-full">
            <div class="font-gilroy text-xl text-white ">
              <router-link :to="{ name: 'index' }" class="text-3xl uppercase"> Logo </router-link>
              <p class="py-4 w-8/12 max-md:mx-auto max-md:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eaque unde! Quos amet nostrum aspernatur dignissimos assumenda dicta consectetur dolores!</p>
            </div>
          </div>
          <div class="footer-block w-6/12 px-4 justify-between text-right max-md:text-center max-md:w-full">
            <div class="font-gilroy text-xl text-white w-8/12 ml-auto max-md:w-full max-md:py-10">
              <h3 class=" text-2xl ">Обратная связь</h3>
              <p class="text-base text-gray-300 py-4 max-md:w-9/12 max-md:mx-auto">Введите свой электронный адрес и отправьте его и наши специалисты свяжутся с вами в течении 25 минут.</p>
              <form class="flex-col flex items-end">
                <input type="" name="" value="" class=" w-full bg-opacityBtn outline-none px-4 py-4 rounded-2xl max-md:mx-auto text-base" placeholder="Введите свой E-mail">
                <v-button class="text-center py-2 w-full  border-none mt-4 max-md:mx-auto ">Отправить</v-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <p class="text-center py-4 text-white">© 2000-2023, Все права защищены</p>
  </div>
</template>

<script>
  import vButton from './Buttons.vue'
  export default {
    components: {
      vButton
    },
  }
</script>

<style lang="scss" scoped>

</style>