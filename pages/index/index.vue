<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const { t } = useI18n();
const getNewsBannerApi = useNewsPlaceInSite();
const route = useRoute();

// banner api
const { data: newsBanner } = useAsyncData("banner", () =>
  getNewsBannerApi.getNewsBanner()
);
</script>

<template>
  <SliderBanner :bannerList="newsBanner" />
</template>

<style lang="scss" scoped></style>
