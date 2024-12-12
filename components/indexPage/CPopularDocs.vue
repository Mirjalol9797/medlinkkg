<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const { windowWidth, setupListeners } = useWindowWidth();

setupListeners();
</script>
<template>
  <div class="bg-[#f3f3f3] py-10">
    <div class="site-container">
      <h2 class="main-page-title">Популярные специальности врачей</h2>

      <!-- for desktop -->
      <div class="site-slider relative" v-if="windowWidth > 768">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="6"
          :spaceBetween="16"
          :loop="false"
          :navigation="{
            nextEl: '.swiper-button-next-docs',
            prevEl: '.swiper-button-prev-docs',
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
              <div class="h-[140px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/terapevt.jpg"
                  alt="terapevt"
                  title="terapevt"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#6486fa] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                Терапевт
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="h-[140px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/kardiolog.jpg"
                  alt="kardiolog"
                  title="kardiolog"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#ff597f] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                Кардиолог
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="h-[140px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/pediatr.jpg"
                  alt="pediatr"
                  title="pediatr"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#4c6ddf] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                Педиатр
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="h-[140px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/lor.jpg"
                  alt="lor"
                  title="lor"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#ec8d4e] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                ЛОР
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="h-[140px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/nevrolog.jpg"
                  alt="nevrolog"
                  title="nevrolog"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#fb6285] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                Невролог
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="h-[140px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/okulist.jpg"
                  alt="okulist"
                  title="okulist"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#6e8efb] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                Офтальмолог
              </div>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link :to="localePath(`/`)" class="relative">
              <div class="h-[140px] blur-[3px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/okulist.jpg"
                  alt="okulist"
                  title="okulist"
                  class="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="font-medium absolute rounded-b-lg bg-[#ec8d4e] z-10 bottom-0 w-full text-center text-white py-2 text-base"
              >
                Посмотреть все
              </div>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <div
          class="swiper-button-prev swiper-button-prev-docs !left-[-55px] bg-white rounded-full 1400:!left-[-18px] 768:!hidden"
        ></div>
        <div
          class="swiper-button-next swiper-button-next-docs !right-[-55px] bg-white rounded-full 1400:!right-[-18px] 768:!hidden"
        ></div>
      </div>

      <!-- for mobile -->
      <template v-else>
        <div class="grid grid-cols-2 gap-6 mb-6 480:gap-3">
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="h-[240px] 480:h-[180px]">
              <img
                src="@/public/icons/mainPage/popularDocs/terapevt.jpg"
                alt="terapevt"
                title="terapevt"
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute rounded-b-lg bg-[#6486fa] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Терапевт
            </div>
          </nuxt-link>
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="h-[240px] 480:h-[180px]">
              <img
                src="@/public/icons/mainPage/popularDocs/kardiolog.jpg"
                alt="kardiolog"
                title="kardiolog"
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute rounded-b-lg bg-[#ff597f] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Кардиолог
            </div>
          </nuxt-link>
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="h-[240px] 480:h-[180px]">
              <img
                src="@/public/icons/mainPage/popularDocs/pediatr.jpg"
                alt="pediatr"
                title="pediatr"
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute rounded-b-lg bg-[#4c6ddf] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Педиатр
            </div>
          </nuxt-link>
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="h-[240px] 480:h-[180px]">
              <img
                src="@/public/icons/mainPage/popularDocs/lor.jpg"
                alt="lor"
                title="lor"
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute rounded-b-lg bg-[#ec8d4e] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              ЛОР
            </div>
          </nuxt-link>
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="h-[240px] 480:h-[180px]">
              <img
                src="@/public/icons/mainPage/popularDocs/nevrolog.jpg"
                alt="nevrolog"
                title="nevrolog"
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute rounded-b-lg bg-[#fb6285] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Невролог
            </div>
          </nuxt-link>
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="h-[240px] 480:h-[180px]">
              <img
                src="@/public/icons/mainPage/popularDocs/okulist.jpg"
                alt="okulist"
                title="okulist"
                class="w-full h-full object-cover rounded-lg"
                loading="lazy"
                format="webp"
              />
            </div>
            <div
              class="font-medium absolute rounded-b-lg bg-[#6e8efb] z-10 bottom-0 w-full text-center text-white py-2 text-base"
            >
              Офтальмолог
            </div>
          </nuxt-link>
        </div>
        <div class="flex-center-cbetween">
          <nuxt-link
            to="/"
            class="inline-block bg-[#f39] px-6 py-3 rounded-md text-white text-sm font-semibold text-center"
          >
            Посмотреть все
          </nuxt-link>
        </div>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
