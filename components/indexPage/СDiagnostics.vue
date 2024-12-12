<script setup>
const emit = defineEmits(["openChooseYourCity"]);

const { windowWidth, setupListeners } = useWindowWidth();

setupListeners();

function openChooseYourCity(e) {
  emit("openChooseYourCity", e);
}
</script>

<template>
  <div class="bg-[#f3f3f3] py-10">
    <div class="site-container">
      <h2 class="main-page-title">
        Диагностика в <span @click="openChooseYourCity">Бишкеке</span>
        {{}}
      </h2>

      <!-- for desktop -->
      <div
        class="site-slider relative slider-diagnostics"
        v-if="windowWidth > 768"
      >
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="5"
          :spaceBetween="16"
          :loop="false"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next-diagnostics',
            prevEl: '.swiper-button-prev-diagnostics',
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
              slidesPerView: 5,
            },
          }"
        >
          <SwiperSlide v-for="(item, index) in 8" :key="index">
            <nuxt-link
              :to="localePath(`/`)"
              class="relative rounded-lg border border-[#3d3f550d] block hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_15px_0_#3d3f5533] group"
            >
              <div class="relative">
                <div class="h-[120px]">
                  <img
                    src="@/public/icons/mainPage/popularDocs/lor.jpg"
                    alt="clinic"
                    title="clinic"
                    class="w-full h-full object-cover rounded-t-lg"
                    loading="lazy"
                    format="webp"
                  />
                </div>
                <div
                  class="bg-white px-3 py-0.5 absolute bottom-1 right-1 rounded-lg"
                >
                  Скидка
                </div>
                <div
                  class="absolute top-1 right-1 bg-purple-500 text-white rounded-full p-2 text-xs font-medium w-9 h-9 flex-center-between"
                >
                  80%
                </div>
              </div>
              <div class="py-3 px-4 bg-white rounded-b-lg">
                <div
                  class="text-[15px] leading-5 font-semibold mb-2 group-hover:text-[#6339f5]"
                >
                  Комплексная программа для мужчин всего за 1000 руб
                </div>
                <div
                  class="text-[#a7a7ae] text-[13px] leading-4 overflow-hidden whitespace-nowrap mb-2 promo-card-desc relative"
                >
                  <span class="pr-2 text-[#ffaa30] font-medium">
                    <img
                      src="@/public/icons/mainPage/star.svg"
                      alt="star"
                      class="w-3 mt-[-3px] inline-block mr-1"
                    />
                    <span>4.5</span>
                  </span>
                  <span>Клиника Личный доктор</span>
                  <div>
                    <span>м. Новаторская </span>
                    <span>улица Новаторов, 6</span>
                  </div>
                </div>
                <div class="text-[#a7a7ae] text-[13px] leading-4">
                  <img
                    src="@/public/icons/mainPage/time.svg"
                    alt="time"
                    class="w-3 inline-block mr-2 mt-[-1px]"
                  />
                  <span>Осталось 4 дня, до 27 ноября</span>
                </div>
              </div>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
        <div
          class="swiper-button-prev swiper-button-prev-diagnostics !left-[-55px] bg-white rounded-full 1400:!left-[-18px] 768:!hidden"
        ></div>
        <div
          class="swiper-button-next swiper-button-next-diagnostics !right-[-55px] bg-white rounded-full 1400:!right-[-18px] 768:!hidden"
        ></div>
      </div>

      <!-- for mobile -->
      <template v-else>
        <div class="grid grid-cols-2 gap-6 mb-6 480:gap-3">
          <nuxt-link
            :to="localePath(`/`)"
            class="relative rounded-lg border border-[#3d3f550d] block hover:shadow-[0_0_1px_0_#3d3f5566,0_2px_15px_0_#3d3f5533] group"
            v-for="item in 6"
            :key="item"
          >
            <div class="relative">
              <div class="h-[120px]">
                <img
                  src="@/public/icons/mainPage/popularDocs/lor.jpg"
                  alt="clinic"
                  title="clinic"
                  class="w-full h-full object-cover rounded-t-lg"
                  loading="lazy"
                  format="webp"
                />
              </div>
              <div
                class="bg-white px-3 py-0.5 absolute bottom-1 right-1 rounded-lg"
              >
                Скидка
              </div>
              <div
                class="absolute top-1 right-1 bg-purple-500 text-white rounded-full p-2 text-xs font-medium w-9 h-9 flex-center-between"
              >
                80%
              </div>
            </div>
            <div class="py-3 px-4 bg-white rounded-b-lg 480:px-2 480:py-2">
              <div
                class="text-[15px] leading-5 font-semibold mb-2 group-hover:text-[#6339f5] 480:text-[13px]"
              >
                Комплексная программа для мужчин всего за 1000 руб
              </div>
              <div
                class="text-[#a7a7ae] text-[13px] leading-4 overflow-hidden whitespace-nowrap mb-2 promo-card-desc relative"
              >
                <span class="pr-2 text-[#ffaa30] font-medium">
                  <img
                    src="@/public/icons/mainPage/star.svg"
                    alt="star"
                    class="w-3 mt-[-3px] inline-block mr-1"
                  />
                  <span>4.5</span>
                </span>
                <span>Клиника Личный доктор</span>
                <div>
                  <span>м. Новаторская </span>
                  <span>улица Новаторов, 6</span>
                </div>
              </div>
              <div class="text-[#a7a7ae] text-[13px] leading-4">
                <img
                  src="@/public/icons/mainPage/time.svg"
                  alt="time"
                  class="w-3 inline-block mr-2 mt-[-1px]"
                />
                <span>Осталось 4 дня, до 27 ноября</span>
              </div>
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

<style lang="scss">
.slider-diagnostics {
  .swiper {
    padding: 0 8px;
  }
  .swiper-wrapper {
    padding: 12px 0;
  }

  .promo-card-desc {
    &:after {
      background-image: linear-gradient(90deg, #ffffff1a, #fff 75%);
      bottom: 0;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 40px;
      right: 0;
    }
  }
}
</style>
