<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// components
import searchHeader from "@/components/indexPage/searchHeader.vue";

// api
const { t } = useI18n();
const route = useRoute();

// banner api
const { data: newsBanner } = useAsyncData("banner", () =>
  getNewsBannerApi.getNewsBanner()
);
</script>

<template>
  <div class="site-container">
    <searchHeader />
  </div>
</template>

<style lang="scss" scoped></style>
