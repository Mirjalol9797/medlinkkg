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
  <header>Header</header>
</template>

<style lang="scss" scoped></style>
