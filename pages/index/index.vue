<script setup>
import { useAsyncData } from "nuxt/app";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import CPopularDocsVue from "~/components/indexPage/CPopularDocs.vue";

// components
import CSearchHeader from "~/components/indexPage/CSearchHeader.vue";
import CServices from "~/components/indexPage/CServices.vue";
import CPopularDocs from "~/components/indexPage/CPopularDocs.vue";

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
    <CSearchHeader />
    <CServices />
  </div>
  <CPopularDocs />
</template>

<style lang="scss" scoped></style>
