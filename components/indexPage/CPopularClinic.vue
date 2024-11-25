<script setup>
const emit = defineEmits(["openChooseYourCity"]);

function openChooseYourCity(e) {
  emit("openChooseYourCity", e);
}
</script>

<template>
  <div class="bg-[#f3f3f3] py-10">
    <div class="site-container">
      <div class="main-page-title">
        Популярные клиники в <span @click="openChooseYourCity">Бишкеке</span>
      </div>
      <div class="site-slider relative">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="6"
          :spaceBetween="16"
          :loop="false"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
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
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="bg-white h-[120px] py-3 px-6">
                <img
                  src="@/public/icons/mainPage/popularClinics/clinic-1.png"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="bg-white h-[120px] py-3 px-6">
                <img
                  src="@/public/icons/mainPage/popularClinics/clinic-2.png"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="bg-white h-[120px] py-3 px-6">
                <img
                  src="@/public/icons/mainPage/popularClinics/clinic-3.png"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="bg-white h-[120px] py-3 px-6">
                <img
                  src="@/public/icons/mainPage/popularClinics/clinic-4.png"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="bg-white h-[120px] py-3 px-6">
                <img
                  src="@/public/icons/mainPage/popularClinics/clinic-5.png"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="bg-white h-[120px] py-3 px-6">
                <img
                  src="@/public/icons/mainPage/popularClinics/clinic-6.png"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  format="webp"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <div
          class="swiper-button-prev !left-[-55px] bg-white rounded-full"
        ></div>
        <div
          class="swiper-button-next !right-[-55px] bg-white rounded-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
