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
        <SwiperSlide>
          <nuxt-link :to="localePath(`/doctors/terapevt`)" class="relative">
            <div class="h-[140px]">
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
        <SwiperSlide>
          <nuxt-link :to="localePath(`/doctors/kardiolog`)" class="relative">
            <div class="h-[140px]">
              <img
                src="@/public/icons/mainPage/popularDocs/kardiolog.jpg"
                alt="kardiolog"
                title="kardiolog"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute bg-[#ff597f] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Кардиолог
            </div>
          </nuxt-link>
        </SwiperSlide>
        <SwiperSlide>
          <nuxt-link :to="localePath(`/doctors/pediatr`)" class="relative">
            <div class="h-[140px]">
              <img
                src="@/public/icons/mainPage/popularDocs/pediatr.jpg"
                alt="pediatr"
                title="pediatr"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute bg-[#4c6ddf] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Педиатр
            </div>
          </nuxt-link>
        </SwiperSlide>
        <SwiperSlide>
          <nuxt-link :to="localePath(`/doctors/lor`)" class="relative">
            <div class="h-[140px]">
              <img
                src="@/public/icons/mainPage/popularDocs/lor.jpg"
                alt="lor"
                title="lor"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute bg-[#ec8d4e] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              ЛОР
            </div>
          </nuxt-link>
        </SwiperSlide>
        <SwiperSlide>
          <nuxt-link :to="localePath(`/doctors/nevrolog`)" class="relative">
            <div class="h-[140px]">
              <img
                src="@/public/icons/mainPage/popularDocs/nevrolog.jpg"
                alt="nevrolog"
                title="nevrolog"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute bg-[#fb6285] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Невролог
            </div>
          </nuxt-link>
        </SwiperSlide>
        <SwiperSlide>
          <nuxt-link :to="localePath(`/doctors/okulist`)" class="relative">
            <div class="h-[140px]">
              <img
                src="@/public/icons/mainPage/popularDocs/okulist.jpg"
                alt="okulist"
                title="okulist"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute bg-[#6e8efb] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Офтальмолог
            </div>
          </nuxt-link>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
