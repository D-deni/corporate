<template>
  <div class="max-w-container mx-auto py-[100px] px-4">
    <div class=" staff-title text-center">
      <h2 class="text-3xl uppercase font-bold">Команда</h2>
      <h3 class="text-gray-400 pt-3">Наш дружный коллектив!</h3>
      <hr>
      
    </div>
    <div class="staff-info w-full my-[50px] flex ">
      <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="mx-auto text-center border-[2px] border-gray-300 rounded-3xl"
      >
        <swiper-slide class="">
          <div class="flex justify-between max-md:flex-col p-10 items-center">
            <div class="staff-info_block w-6/12 mx-auto max-md:py-5 max-md:w-full">
              <div class="staff-info__title w-11/12 max-md:w-full mx-auto">
                <h1 class="text-3xl text-gray-700 font-bold">John Bridge</h1>
                <h2 class="text-xl text-gray-500">consultant</h2>
                <p class="py-7 text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur quod magnam eligendi dolorem, beatae vel? Aperiam odit fugiat eos obcaecati facilis pariatur suscipit ipsa, ad quae nihil voluptas error deserunt repellat quidem perferendis quisquam dignissimos quis esse neque iusto iste voluptatibus quaerat similique? Reiciendis impedit nemo voluptatum libero vitae.</p>
                <p class="py-7 text-lg text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quo voluptas tempora fuga porro sint pariatur recusandae repellat, neque culpa. </p>
              </div>
            </div>
            <div class="staff-info_block w-6/12 mx-auto max-md:w-9/12">
              <div class="staff-info__img ">
                <img src="/img/user-photo.jpg" alt="" class="max-md:w-full rounded-3xl">
              </div>
            </div>
           
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div class="flex justify-between max-md:flex-col p-10 items-center">
            <div class="staff-info_block w-6/12 mx-auto max-md:py-5 max-md:w-full">
              <div class="staff-info__title w-11/12 max-md:w-full mx-auto">
                <h1 class="text-3xl text-gray-700 font-bold">John Bridge</h1>
                <h2 class="text-xl text-gray-500">consultant</h2>
                <p class="py-7 text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur quod magnam eligendi dolorem, beatae vel? Aperiam odit fugiat eos obcaecati facilis pariatur suscipit ipsa, ad quae nihil voluptas error deserunt repellat quidem perferendis quisquam dignissimos quis esse neque iusto iste voluptatibus quaerat similique? Reiciendis impedit nemo voluptatum libero vitae.</p>
                <p class="py-7 text-lg text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quo voluptas tempora fuga porro sint pariatur recusandae repellat, neque culpa. </p>
              </div>
            </div>
            <div class="staff-info_block w-6/12 mx-auto max-md:w-9/12">
              <div class="staff-info__img ">
                <img src="/img/user-photo.jpg" alt="" class="max-md:w-full rounded-3xl">
              </div>
            </div>
           
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div class="flex justify-between max-md:flex-col p-10 items-center">
            <div class="staff-info_block w-6/12 mx-auto max-md:py-5 max-md:w-full">
              <div class="staff-info__title w-11/12 max-md:w-full mx-auto">
                <h1 class="text-3xl text-gray-700 font-bold">John Bridge</h1>
                <h2 class="text-xl text-gray-500">consultant</h2>
                <p class="py-7 text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur quod magnam eligendi dolorem, beatae vel? Aperiam odit fugiat eos obcaecati facilis pariatur suscipit ipsa, ad quae nihil voluptas error deserunt repellat quidem perferendis quisquam dignissimos quis esse neque iusto iste voluptatibus quaerat similique? Reiciendis impedit nemo voluptatum libero vitae.</p>
                <p class="py-7 text-lg text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quo voluptas tempora fuga porro sint pariatur recusandae repellat, neque culpa. </p>
              </div>
            </div>
            <div class="staff-info_block w-6/12 mx-auto max-md:w-9/12">
              <div class="staff-info__img ">
                <img src="/img/user-photo.jpg" alt="" class="max-md:w-full rounded-3xl">
              </div>
            </div>
           
          </div>
        </swiper-slide>
       
        
      </swiper>
    </div>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

 import 'swiper/css';
 import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  }
</script>

<style lang="scss" scoped>

</style>