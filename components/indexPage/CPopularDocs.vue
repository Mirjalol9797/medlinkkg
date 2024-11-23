<script setup></script>
<template>
  <div class="bg-[#f3f3f3] py-10">
    <div class="site-container">
      <div class="main-page-title">Популярные специальности врачей</div>
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="6"
        :spaceBetween="16"
        :loop="false"
        :breakpoints="{
          360: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          960: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }"
      >
        <SwiperSlide v-for="(item, index) in 7" :key="index">
          <nuxt-link :to="localePath(`/doctors/terapevt`)" class="relative">
            <div class="">
              <img
                src="@/public/icons/mainPage/popularDocs/terapevt.jpg"
                alt="terapevt"
                title="terapevt"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute bg-[#6486fa] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Терапевт
            </div>
          </nuxt-link>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
