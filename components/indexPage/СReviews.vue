<script setup></script>

<template>
  <div class="py-10">
    <div class="site-container">
      <h2 class="main-page-title 768:!mb-5">Отзывы</h2>
      <div class="site-slider relative slider-reviews">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="4"
          :spaceBetween="16"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next-preview',
            prevEl: '.swiper-button-prev-preview',
          }"
          :autoplay="{
            delay: 4000, // Задержка в миллисекундах
            disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }"
        >
          <SwiperSlide v-for="(item, index) in 8" :key="index">
            <nuxt-link
              :to="localePath(`/`)"
              class="relative rounded-lg p-4 bg-white border border-[#3d3f550d] block hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_15px_0_#3d3f5533] group"
            >
              <div class="text-lg mb-3 font-semibold">АкваLand</div>
              <div class="mb-7 flex">
                <div class="flex-center mr-1">
                  <div class="flex-center mr-2 gap-[2px]">
                    <img
                      src="../../public/icons/mainPage/star.svg"
                      alt="star"
                      v-for="(item, index) in 5"
                      :key="index"
                      class="w-[14px]"
                    />
                  </div>
                  <div class="font-semibold">5,0</div>
                </div>
                <div class="text-xs text-[#a7a7ae]">/ 18 отзывов</div>
              </div>
              <div class="text-xs text-[#a7a7ae] mb-3">
                Мария 24 ноября в 2:33
              </div>
              <div class="mb-6">
                Общая атмосфера и тренер мне понравились, а больше всего хочу
                отметить профессионализм инструктора, который проявился в
                умениях и отношении, в подходе к ребенку. Школа удобно
                расположена, внутри краси
              </div>
              <nuxt-link to="/" class="text-[#6339f5]">Все отзывы</nuxt-link>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <div
          class="swiper-button-prev swiper-button-prev-preview !left-[-55px] bg-white rounded-full 1400:!left-[-18px] 768:!hidden"
        ></div>
        <div
          class="swiper-button-next swiper-button-next-preview !right-[-55px] bg-white rounded-full 1400:!right-[-18px] 768:!hidden"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider-reviews {
  .swiper {
    padding: 0 8px;
  }
  .swiper-wrapper {
    padding: 12px 0;
  }
}
</style>
