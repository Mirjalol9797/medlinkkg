<script setup>
import { onMounted } from "vue";

const { locales, locale, setLocale } = useI18n();

const localeView = computed(() =>
  locales.value.filter((item) => locale.value == item.code)
);

const loader = ref(false);

function language(value) {
  setLocale(value);
}

function showHeaderMenu() {
  document.querySelector(".header-nav").classList.add("active");
}

function closeHeaderMenu() {
  document.querySelector(".header-nav").classList.remove("active");
}

onMounted(() => {});
</script>

<template>
  <header class="header py-4 border-b border-[#f7f7f7] header-mobile 640:py-3">
    <div class="site-container flex-center-between">
      <div class="header-burger hidden 1024:block w-6" @click="showHeaderMenu">
        <img src="@/public/icons/mainPage/burger-menu.svg" alt="burger-menu" />
      </div>
      <nuxt-link to="/" class="inline-block w-[120px]">
        <img src="/site-logo.png" alt="logo" title="logo" />
      </nuxt-link>
      <ul class="flex-center gap-6 font-medium header-nav">
        <button
          class="header-close hidden 1024:block absolute top-4 right-4 w-4"
          @click="closeHeaderMenu"
        >
          <img src="@/public/icons/mainPage/close.svg" alt="" />
        </button>
        <nuxt-link to="/" class="hidden w-[120px] 1024:inline-block">
          <img src="/site-logo.png" alt="logo" title="logo" />
        </nuxt-link>
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Врачи
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Клиники
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Диагностика
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Услуги
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Препараты
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Болезни
          </nuxt-link>
        </li>
        <li class="1024:hidden">
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Еще
          </nuxt-link>
        </li>
      </ul>
      <div class="flex-center gap-2">
        <nuxt-link to="/" class="bg-[#f39] px-2 py-1.5 rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="b2120-b0"
            style="color: #fff"
          >
            <path
              fill="currentColor"
              d="M3 10.163C3 7.262 5.13 5 8 5c1.929 0 3.244 1.102 4 2.066C12.756 6.102 14.071 5 16 5c2.87 0 5 2.264 5 5.163 0 4.561-4.568 7.856-8.243 9.66a1.71 1.71 0 0 1-1.514 0C7.568 18.02 3 14.724 3 10.163"
            ></path>
          </svg>
        </nuxt-link>
        <button class="bg-[#f39] px-3 py-2 rounded-md text-white 1024:hidden">
          Добавить клинику
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
}

@media (max-width: 1024px) {
  .header {
    &-nav {
      display: none;

      &.active {
        display: block;
        position: fixed;
        background-color: #fff;
        width: 100%;
        height: 100%;
        inset: 0;
        z-index: 100;
        padding: 20px 20px;

        li {
          padding: 8px 0;
        }
      }
    }
  }
}
</style>
