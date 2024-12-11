<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const emit = defineEmits(["openChooseYourCity"]);
const windowWidth = ref(null);

function openChooseYourCity(e) {
  emit("openChooseYourCity", e);
}

onMounted(() => {
  const updateWidth = () => (windowWidth.value = window.innerWidth);
  updateWidth(); // Устанавливаем начальное значение
  window.addEventListener("resize", updateWidth);
  onBeforeUnmount(() => window.removeEventListener("resize", updateWidth));
});
</script>

<template>
  <div class="bg-[#f3f3f3] py-10">
    <div class="site-container">
      <h2 class="main-page-title">
        Популярные клиники в <span @click="openChooseYourCity">Бишкеке</span>
      </h2>

      <!-- for desktop -->
      <div class="site-slider relative" v-if="windowWidth > 768">
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="6"
          :spaceBetween="16"
          :loop="false"
          :navigation="{
            nextEl: '.swiper-button-next-clinic',
            prevEl: '.swiper-button-prev-clinic',
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
              <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
              <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
              <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
              <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
              <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
              <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
          class="swiper-button-prev swiper-button-prev-clinic !left-[-55px] bg-white rounded-full"
        ></div>
        <div
          class="swiper-button-next swiper-button-next-clinic !right-[-55px] bg-white rounded-full"
        ></div>
      </div>

      <!-- for mobile -->
      <template v-else>
        <div class="grid grid-cols-2 gap-6 480:gap-3">
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
          <nuxt-link :to="localePath(`/`)" class="relative">
            <div class="bg-white h-[120px] py-3 px-6 rounded-lg">
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
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
