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

onMounted(() => {});
</script>

<template>
  <header class="header py-4 border-b border-[#f7f7f7]">
    <div class="site-container flex-center-between">
      <nuxt-link to="/" class="inline-block w-[120px]">
        <img src="/site-logo.png" alt="logo" title="logo" />
      </nuxt-link>
      <ul class="flex-center gap-6 font-medium">
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
        <li>
          <nuxt-link
            to="/"
            class="font-semibold text-base hover:text-[#69f] hover:border-b hover:border-[#69f]"
          >
            Еще
          </nuxt-link>
        </li>
      </ul>
      <button class="bg-[#f39] px-3 py-2 rounded-md text-white">
        Добавить клинику
      </button>
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
</style>
